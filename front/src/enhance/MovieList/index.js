import {toList, fetch, branch} from 'hoc';
import {Movie} from 'enhance';
import {compose, prop} from 'ramda';
import {GlobalSpinner} from 'components';
import './style.css';

const moviesUrl = ({year}) => `http://localhost:3001/api/movies/${year}`;
const setFormat = movies => ({items: movies, keys: 'name'});

const enhance = compose(
  fetch(moviesUrl, setFormat),
  branch(prop('loading'), GlobalSpinner),
  toList({className: 'movie-list-component'}),
);

export default enhance(Movie);
