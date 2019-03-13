import {merge, identity, map, complement, curry} from 'ramda';
import React, {useState, useEffect} from 'react';
import {randomNumber, delay} from 'utils';
const switchValues = map(complement(identity));

const fetchHoc = curry((url, mapper, BaseComponent) => props => {
  const status = {loading: true, completed: false};
  const initialState = merge(props, status);
  const [data, changeState] = useState(initialState);

  const fetchData = async () => {
    await delay(randomNumber(250, 3000));
    await fetch(url(props))
      .then(res => res.json())
      .then(mapper)
      .then(merge(switchValues(status)))
      .then(changeState);
  }

  useEffect(() => {
      fetchData()
  }, []);

  return <BaseComponent {...data} />;
});

export default fetchHoc;
