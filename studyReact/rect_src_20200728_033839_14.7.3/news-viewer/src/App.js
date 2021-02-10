import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {

  // const aa = () => {
  //   console.log('11111111111111');
  // }

  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
