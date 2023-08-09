import React from 'react'
import './style.css';

const Input = (props) => {
  const { type, label, placeholder, onChange } = props;


  return (
    <div className='flex row inputcontain' >

      <label>{label ? label : ""}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} />

    </div>
  )
}

export default Input