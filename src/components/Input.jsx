import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci';
const Input = ({onClick}) => {
  return (
    <div className='input'>
        <input type="text" placeholder='Send a message...' />
        <button onClick={onClick}><CiLocationArrow1/></button>
    </div>
  )
}

export default Input