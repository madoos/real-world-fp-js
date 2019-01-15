import React from 'react'
import logo from './lamda.svg'
const Brand = ({name}) => (
  <div className="brand-component">
    <img src={logo} alt="lamda-log" />
    <h1>{name}</h1>
  </div>
)

export default Brand
