import React from 'react';
import { Movie, Spinner } from 'components'
import { branch, fetch } from 'hoc'
import { propEq, pipe, prop, replace } from "ramda"
import {projection} from 'utils';
import './App.css';

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

  const MovieOrSpinner = branch(prop('loading') ,Spinner, Movie)
  const FetchMovie = fetch(urlFromTitle, parseResponse, MovieOrSpinner)

  return (
    <div className="App">
      <FetchMovie title="Annihilation" />
      <FetchMovie title="I Am Not a Witch" />
    </div>
  );
};

