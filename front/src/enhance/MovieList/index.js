import {toList, fetch, branch} from 'hoc';
import {Movie} from 'enhance';
import {compose, prop, isEmpty} from 'ramda';
import {GlobalSpinner, NotFound} from 'components';

import './style.css';

const moviesUrl = ({year}) => `http://localhost:3001/api/movies/${year}`;
const setFormat = movies => ({items: movies, keys: 'name'});

const withAsyncRequest = compose(
  fetch(moviesUrl, setFormat),
  branch(prop('loading'), GlobalSpinner),
);

const moviesOrNotFound = compose(
  branch(({items, completed}) => completed && isEmpty(items), NotFound),
  toList({className: 'movie-list-component'}),
);

const enhance = compose(
  withAsyncRequest,
  moviesOrNotFound,
);

export default enhance(Movie);
