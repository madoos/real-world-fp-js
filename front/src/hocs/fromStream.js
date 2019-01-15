import React, {Component} from 'react'
import {curry, merge} from 'ramda'
import EventEmitter from 'events'
import {fromEvent} from 'rxjs'

const fromStream = curry((streamHandler, BaseComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.emitter = new EventEmitter()
      this.channel$ = fromEvent(this.emitter, 'props')
      this.props$ = streamHandler(this.channel$)
    }
    render() {
      const enhanceProps = merge(this.props, this.state)
      return <BaseComponent {...enhanceProps} />
    }
    componentWillMount() {
      this.props$.subscribe(props =>
        this.setState(prevState => merge(prevState, props))
      )
    }

    componentDidMount() {
      this.emitter.emit('props', this.props)
    }
  }
})

export default fromStream
