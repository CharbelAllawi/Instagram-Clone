import React from 'react'
import './style.css';

const Button = (props) => {
  const { value, onClick } = props;


  return (
    <div className='btn' >

      <input type="button" value={value} className="btn" onClick={onClick} />

    </div>
  )
}

export default Button