import React from 'react';
import {curry} from 'ramda';

const toList = curry((options, BaseComponent) => ({items, keys}) => {
  const {className} = options;

  return (
    <div className={className}>
      {items.map((data, i) => {
        const k = String(data[keys] || i);
        return <BaseComponent {...data} key={k} />;
      })}
    </div>
  );
});

export default toList;
