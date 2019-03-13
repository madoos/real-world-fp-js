import React from 'react';
import { Movie, Spinner } from 'components'
import { branch } from 'hoc'
import { propEq } from "ramda"
import './App.css';

export default () => {

  const MovieOrSpinner = branch(propEq('title', "Annihilation") ,Spinner, Movie)

  return (
    <div className="App">
      <MovieOrSpinner title="Annihilation" year="2018" poster="https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SX300.jpg" totalVotes={343} />
      <MovieOrSpinner title="I Am Not a Witch" year="2019" poster="https://m.media-amazon.com/images/M/MV5BMmZiMmEzMzAtYzhiZi00NjMwLWJmNzMtMjRkNTI2YTM5N2FiXkEyXkFqcGdeQXVyNTkyMjQwNw@@._V1_SX300.jpg" totalVotes={0} />
    </div>
  );
};

