import React from 'react'
import dog from './boxing-dog.gif'
import './style.css'

const Animation = props => (
  <div className="animation-component">
    <img src={dog} alt="boxing dog" />
  </div>
)

export default Animation
