import React from 'react';
import {Brand, MovieList} from 'enhance';
import './App.css';

export default () => {
  const year = 2019;

  return (
    <div className="App">
      <Brand name={`${year} Best Movies`} speed={120} />
      <MovieList year={year} />
    </div>
  );
};
