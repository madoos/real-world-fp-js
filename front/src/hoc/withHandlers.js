import React from 'react';
import {curry, merge, map} from 'ramda';

export default curry((handlersDescription, BaseComponent) => props => {
  const handlers = map(f => f(props), handlersDescription);
  return <BaseComponent {...merge(props, handlers)} />;
});
