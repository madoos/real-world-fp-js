import {curry, is, map, path} from 'ramda';
import {Observable, of} from 'rxjs';
import {concatMap, delay as _delay} from 'rxjs/operators';

const {entries} = Object;
const {random, trunc} = Math;

export const isFunction = is(Function);

export const mapKeys = curry((f, o) => {
  return entries(o).reduce((mapped, [key, value]) => {
    return {...mapped, [f(key)]: value};
  }, {});
});

export const projection = curry((descriptor, obj) => {
  return map(getter => {
    return isFunction(getter) ? getter(obj) : path(getter.split('.'), obj);
  }, descriptor);
});

export const randomNumber = (min, max) => {
  return trunc(random() * (max - min) + min);
};

export const split = curry((separator, source) => {
  return new Observable(observer => {
    source.subscribe(data =>
      data.split(separator).forEach(letter => observer.next(letter)),
    );
  });
});

export const withDelay = ms => concatMap(x => of(x).pipe(_delay(ms)));
