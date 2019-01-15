import React from 'react'

const identity = BaseComponent => props => {
  return <BaseComponent {...props} />
}

export default identity
