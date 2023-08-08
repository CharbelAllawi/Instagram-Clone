import React from 'react'

const Input = (onchange) => {
  return (
    <div className='flex column' >
      <label>Label</label>
      <input type='text' onchange={(e) => onchange(e.target.value)} />

    </div>
  )
}

export default Input