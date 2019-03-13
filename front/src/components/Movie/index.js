import React from 'react';
import {branch} from 'hoc';

const Vote = branch(
  ({votes}) => votes > 0,
  ({votes}) => <p>Votes: {votes}</p>,
  ({inc}) => <button onClick={inc}>Vote</button>,
);

export default ({title, year, poster, incrementVotes, totalVotes}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={poster} alt={title} />
      <div>
        <Vote votes={totalVotes} inc={incrementVotes} />
      </div>
    </div>
  );
};
