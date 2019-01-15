import React, {Component} from 'react'
import './App.css'

import {BrandStream, CounterAsync} from './enhanced'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrandStream name="Functional Programing" />
        <CounterAsync />
      </div>
    )
  }
}

export default App
