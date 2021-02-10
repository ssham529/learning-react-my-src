const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

// 1.
// router.get('/', ctx => {
//     ctx.body = '홈';
// });
// 1.
// router.get('/about/:name?', ctx => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : '소개';
// });
// 1.
// router.get('/posts', ctx => {
//   const { id } = ctx.query;
//   ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('HSS Listening to port 4000');
});
