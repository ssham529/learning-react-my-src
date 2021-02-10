import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
// const SplitMe = React.lazy( () => import('./SplitMe') );0
const SplitMe = loadable( 
  () => import('./SplitMe') , 
  {
    fallbacck: <div>loading...</div>
  }
);

function App() {

  const [visible, setVisible] = useState(false);
  const onClick = () => {
    // notify();
    // import('./notify').then(result => result.default());
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver} >Hellog Rect!</p>
        {/* <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense> */}
        {visible && <SplitMe />}
      </header>
    </div>
  );
};

export default App;