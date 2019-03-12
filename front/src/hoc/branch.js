import React from 'react';
import {curry} from 'ramda';

export default curry((predicate, Left, Right) => props =>
  predicate(props) ? <Left {...props} /> : <Right {...props} />,
);
