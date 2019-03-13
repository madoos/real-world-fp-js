import React from 'react';
import {branch} from 'hoc';

import './style.css';

const Vote = branch(
  ({votes}) => votes > 0,
  ({votes}) => <p>Votes: {votes}</p>,
  ({inc}) => <button onClick={inc}>Vote</button>,
);

export default ({title, year, poster, incrementVotes, totalVotes}) => {
  return (
    <div className="movie-component">
      <img src={poster} alt={title} />
      <h4>
        {title} {year}
      </h4>
      <div>
        <Vote votes={totalVotes} inc={incrementVotes} />
      </div>
    </div>
  );
};
