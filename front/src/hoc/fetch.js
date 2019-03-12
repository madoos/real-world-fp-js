import {merge, identity} from 'ramda';
import React, {useState, useEffect} from 'react';
import {randomNumber} from 'utils';

export default (
  url,
  mapper,
  handleInitialState = identity,
) => BaseComponent => props => {
  const info = {loading: true};
  const [data, changeState] = useState(handleInitialState(merge(props, info)));

  useEffect(() => {
    setTimeout(() => {
      fetch(url(props))
        .then(res => res.json())
        .then(mapper)
        .then(res => changeState(merge(res, {loading: false})));
    }, randomNumber(250, 3000));
  }, []);

  return <BaseComponent {...merge(props, data)} />;
};
