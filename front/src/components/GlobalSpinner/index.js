import React from 'react'
import loading from './loading.gif'
import './style.css'

const Spinner = () => (
  <div className="spinner-component">
    <img src={loading} alt="spinner" />
  </div>
)

export default Spinner
