import React from 'react';
import {Brand, MovieList} from 'enhance';
import './App.css';

export default () => {
  const year = 2018;

  return (
    <div className="App">
      <Brand name={`${year} Best Movies`} speed={120} />
      <MovieList year={year} />
    </div>
  );
};
