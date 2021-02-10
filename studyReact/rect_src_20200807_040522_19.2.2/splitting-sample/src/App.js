import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
const SplitMe = React.lazy( () => import('./SplitMe') );

function App() {

  const [visible, setVisible] = useState(false);
  const onClick = () => {
    // notify();
    // import('./notify').then(result => result.default());
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hellog Rect!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
};

export default App;