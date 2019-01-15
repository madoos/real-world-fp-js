import React from 'react'

const Counter = ({count, increment, decrement}) => (
  <div className="counter-component">
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <div>
      <span>Level: {count}</span>
    </div>
  </div>
)

export default Counter
