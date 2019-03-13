import React from 'react';
import {Brand, MovieList} from 'enhanced';
import './App.css';

export default () => {
  const year = 2019;

  return (
    <div className="App">
      <Brand name={`${year} Best Movies`} speed={100} />
      <MovieList year={year} />
    </div>
  );
};
