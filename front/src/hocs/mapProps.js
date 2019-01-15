import React from 'react'
import {curry} from 'ramda'

const mapProps = curry((mapper, Component) => {
  return props => {
    return <Component {...mapper(props)} />
  }
})

export default mapProps
