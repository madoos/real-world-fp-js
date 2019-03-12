import {toList} from 'hoc';
import {Movie} from 'enhance';
import './style.css';

const MovieList = toList(Movie, {className: 'movie-list-component'});

export default MovieList;
