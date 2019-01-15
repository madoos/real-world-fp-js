import React, {Component} from 'react'
import {curry, merge} from 'ramda'

const withState = curry(
  (stateName, stateUpdaterName, initialState, BaseComponent) => {
    return class extends Component {
      state = {
        [stateName]: initialState,
      }

      updateState = updater => {
        this.setState(state => {
          return {
            [stateName]: updater(state[stateName]),
          }
        })
      }

      render() {
        const enhanceProps = merge(this.props, {
          ...this.state,
          [stateUpdaterName]: this.updateState,
        })

        return <BaseComponent {...enhanceProps} />
      }
    }
  }
)

export default withState
