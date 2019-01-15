import React, {Component} from 'react'
import {curry, map, pipe, merge, o, ifElse, length, gt, __, flip} from 'ramda'

const hasArityGt1 = pipe(
  length,
  gt(__, 1)
)

const runDeferred = curry((f, x) => () => f(x))
const conditionalCurry = ifElse(hasArityGt1, curry, runDeferred)
const pipe2Curried = flip(o)
const bindPropsWith = pipe2Curried(conditionalCurry)

const withHandlers = curry((handlers, BaseComponent) => {
  return class extends Component {
    handlers = map(bindPropsWith(handler => handler(this.props)), handlers)

    render() {
      const enhanceProps = merge(this.props, this.handlers)
      return <BaseComponent {...enhanceProps} />
    }
  }
})

export default withHandlers
