import React from 'react'
import {curry, merge} from 'ramda'

const withProps = curry((defaultProps, BaseComponent) => {
  return props => {
    return <BaseComponent {...merge(props, defaultProps)} />
  }
})

export default withProps
