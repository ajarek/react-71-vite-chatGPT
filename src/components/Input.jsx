import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
const Input = ({ onClick, inputValue, onChange }) => {
  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Send a message...'
        value={inputValue}
        onChange={onChange}
       
      />
      <button onClick={onClick}>
        <CiLocationArrow1 />
      </button>
    </div>
  )
}

export default Input
