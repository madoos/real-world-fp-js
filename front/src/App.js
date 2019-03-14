import React from 'react';
import {Movie, Spinner, NotFound, GlobalSpinner} from 'components';
import {branch, fetch, toList} from 'hoc';
import {compose, pipe, prop, replace, isEmpty} from 'ramda';
import {projection} from 'utils';
import './App.css';
import 'enhanced/MovieList/style.css';

const {trunc} = Math;

const urlFromTitle = ({title}) =>
  `https://www.omdbapi.com/?t=${title.split(' ').join('+')}&apikey=BanMePlz`;

const parseResponse = projection({
  title: 'Title',
  year: 'Year',
  poster: 'Poster',
  description: 'Plot',
  votes: pipe(
    prop('imdbVotes'),
    replace(',', '.'),
    Number,
    trunc,
  ),
});

export default () => {
  const enhance = compose(
    branch(prop('loading'), GlobalSpinner),
    branch(({items, completed}) => completed && isEmpty(items), NotFound),
    toList({className: 'movie-list-component'}),
    fetch(urlFromTitle, parseResponse),
    branch(prop('loading'), Spinner),
  );

  const MovieList = enhance(Movie);

  const movies = [
    {title: 'Annihilation'},
    {title: 'I Am Not a Witch'},
    {title: 'Shoplifters'},
  ];

  return (
    <div className="App">
      <MovieList items={movies} completed={true} />
      <MovieList items={[]} completed={true} />
      <MovieList items={[]} loading={true} />
    </div>
  );
};
