import {compose, prop, pipe, replace} from 'ramda';
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
  withState('totalVotes', 'updateVotes', 0),
  withHandlers({
    incrementVotes: ({updateVotes, votes}) => updateVotes(() => votes + 1),
  }),
  branch(prop('loading'), Spinner),
);

export default enhance(Movie);
