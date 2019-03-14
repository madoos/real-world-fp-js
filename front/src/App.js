import React from 'react';
import {Movie, Spinner, NotFound, GlobalSpinner, Brand} from 'components';
import {branch, fetch, toList, withState, withHandlers} from 'hoc';
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

const withMovieState = compose(
  fetch(urlFromTitle, parseResponse),
  withState('totalVotes', 'updateVotes', 0),
  withHandlers({
    incrementVotes: ({updateVotes, votes}) => updateVotes(() => votes + 1),
  }),
  branch(prop('loading'), Spinner),
);

const enhance = compose(
  fetch(movieListUrlByYear, setFormat),
  branch(prop('loading'), GlobalSpinner),
  branch(({items, completed}) => completed && isEmpty(items), NotFound),
  toList({className: 'movie-list-component'}),
  withMovieState,
);

const MovieList = enhance(Movie);

export default ({year}) => {
  return (
    <div className="App">
      <Brand name={`${year} Best Movies`} />
      <MovieList year={year} />
    </div>
  );
};
