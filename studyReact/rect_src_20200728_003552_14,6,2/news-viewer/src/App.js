import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback( category => setCategory(category), []);

  // const aa = () => {
  //   console.log('11111111111111');
  // }

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
};

export default App;
