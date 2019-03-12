import React from 'react';

export default ({title, year, poster, incrementVotes, countVotes}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={poster} alt={title} />
      <p>💖{countVotes}</p>
      <button onClick={incrementVotes}>votes +</button>
      <button onClick={incrementVotes}>votes -</button>
    </div>
  );
};
