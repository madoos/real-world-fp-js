import React from 'react'

import Animation from './enhanced/MaybeAnimation'

const Counter = ({count, increment, decrement}) => (
  <div className="counter-component">
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <div>
      <span>Level: {count}</span>
    </div>
    <Animation count={count} />
  </div>
)

export default Counter
