import React from 'react'
import {curry} from 'ramda'

const branch = curry((predicate, Left, Right) => {
  return props => {
    return predicate(props) ? <Left {...props} /> : <Right {...props} />
  }
})

export default branch
