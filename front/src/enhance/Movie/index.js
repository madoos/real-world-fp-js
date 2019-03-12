import {compose, identity, prop, pipe, inc, dec, replace} from 'ramda';
import {projection} from 'utils';
import {fetch, branch, withState, withHandlers} from 'hoc';
import {Spinner, Movie} from 'components';
const {trunc} = Math;

const urlFromName = ({name}) =>
  `https://www.omdbapi.com/?t=${name.split(' ').join('+')}&apikey=BanMePlz`;

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

const enhance = compose(
  fetch(urlFromName, parseResponse),
  withState('countVotes', 'updateCountVotes', 0),
  withHandlers({
    incrementVotes: ({updateCountVotes, votes}) =>
      updateCountVotes(n => votes + 1 + n),
  }),
  branch(prop('loading'), Spinner),
);

export default enhance(Movie);
