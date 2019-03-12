import React from 'react';

const toList = (BaseComponent, options = {}) => ({ items, keys }) => {
  const { className } = options;

  return (
    <div className={className}>
      {items.map((data, i) => {
        const k = String(data[keys] || i);
        return <BaseComponent {...data} key={k} />;
      })}
    </div>
  );
};

export default toList;
