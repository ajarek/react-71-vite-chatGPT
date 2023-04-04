import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { CiLocationArrow1 } from 'react-icons/ci'
const Input = ({ onClick, inputValue, onChange }) => {
  const { newValue } = useContext(AppContext)
  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Send a message...'
        value={inputValue}
        onChange={onChange}
        autoFocus
      />
      <button
        onClick={onClick}
        disabled={newValue ? false : true}
        className='input-button'
      >
        {newValue ? (
          <CiLocationArrow1 />
        ) : (
          <span>
            <CiLocationArrow1 />
          </span>
        )}
      </button>
    </div>
  )
}

export default Input
