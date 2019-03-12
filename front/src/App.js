import React from 'react';
import {Brand, MovieList} from 'enhance';
import './App.css';

const movies = [
  {name: 'Zama'},
  {name: 'You Were Never Really Here'},
  {name: 'Annihilation'},
  {name: 'Mandy'},
  {name: 'The Mule'},
  {name: 'I Am Not a Witch'},
  {name: 'Shoplifters'},
  {name: 'Eighth Grade'},
];

export default () => {
  return (
    <div className="App">
      <Brand name="Best movies 2019" speed={120} />
      <MovieList keys="name" items={movies} />
    </div>
  );
};
