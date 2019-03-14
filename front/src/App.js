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

const movieListUrlByYear = ({year}) =>
  `http://localhost:3001/api/movies/${year}`;
const setFormat = movies => ({items: movies, keys: 'name'});

export default () => {
  const enhance = compose(
    fetch(movieListUrlByYear, setFormat),
    branch(prop('loading'), GlobalSpinner),
    branch(({items, completed}) => completed && isEmpty(items), NotFound),
    toList({className: 'movie-list-component'}),
    fetch(urlFromTitle, parseResponse),
    branch(prop('loading'), Spinner),
  );

  const MovieList = enhance(Movie);

  return (
    <div className="App">
      <MovieList year={2018} />
    </div>
  );
};
