import React, {Component} from 'react'
import {curry, merge} from 'ramda'
const {entries} = Object

const lifeCycle = curry((lifeCycleHandler, BaseComponent) => {
  const Wrapped = class extends Component {
    render() {
      return <BaseComponent {...merge(this.props, this.state)} />
    }
  }

  entries(lifeCycleHandler).forEach(([name, handler]) => {
    Wrapped.prototype[name] = function(...args) {
      return handler(...args, this)
    }
  })

  return Wrapped
})

export default lifeCycle
