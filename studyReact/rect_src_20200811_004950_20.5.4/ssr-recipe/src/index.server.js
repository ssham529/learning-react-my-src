import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import PreloadContext from "./lib/PreloadContext";
import createSagaMiddleware, { END } from "redux-saga";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";

// asset-manifest.json에서 파일 경로들을 조회합니다.
// HSS 20.5.3
// const manifest = JSON.parse(
//   fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
// );
// const chunks = Object.keys(manifest.files)
//   .filter((key) => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
//   .map((key) => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
//   .join(""); // 합침

const statsFile = path.resolve("./build/loadable-stats.json");

// function createPage(root, stateScript) {
//   return `<!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="utf-8" />
//         <link rel="shortcut icon" href="/favicon.ico" />
//         <meta
//           name="viewport"
//           content="width=device-width,initial-scale=1,shrink-to-fit=no"
//         />
//         <meta name="theme-color" content="#000000" />
//         <title>React App</title>
//         <link href="${manifest.files["main.css"]}" rel="stylesheet" />
//       </head>
//       <body>
//         <noscript>You need to enable JavaScript to run this app.</noscript>
//         <div id="root">
//           ${root}
//         </div>
//         ${stateScript}
//         <script src="${manifest.files["runtime-main.js"]}"></script>
//         ${chunks}
//         <script src="${manifest.files["main.js"]}"></script>
//       </body>
//       </html>
//         `;
// }

function createPage(root, tags) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    ${tags.styles}
    ${tags.links}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      ${root}
    </div>
    ${tags.scripts}
  </body>
  </html>
    `;
}

const app = express();

const serverRender = async (req, res, next) => {
  const context = {};
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
  );
  // sagaMiddleware.run(rootSaga);
  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

  const preloadContext = {
    done: false,
    promises: [],
  };

  const extractor = new ChunkExtractor({ statsFile });

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <PreloadContext.Provider value={preloadContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </PreloadContext.Provider>
    </ChunkExtractorManager>
  );
  //
  ReactDOMServer.renderToStaticMarkup(jsx);
  store.dispatch(END);

  try {
    await sagaPromise;
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMServer.renderToString(jsx);

  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;

  const tags = {
    scripts: stateScript + extractor.getScriptTags(),
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags()
  }

  //   res.send(root);
  // res.send(createPage(root, stateScript));
  res.send(createPage(root, tags));
};

const serve = express.static(path.resolve("./build"), {
  index: false,
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("HSS Running on http://localhost:5000");
});

const html = ReactDOMServer.renderToString(
  <div>Hellog Server Side Rendering?</div>
);

console.log(html);
