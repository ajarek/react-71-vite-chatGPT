import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { FiUser } from 'react-icons/fi'
const AnswerPanel = () => {
  const { viewInfo, setViewInfo, newValue, setNewValue, message, setMessage } =
    useContext(AppContext)

  return (
    <div className='answer-wrapper'>
      <div className='question'>
        <div className='user-logo'><FiUser/></div>
        <div className='text-question'>{newValue}</div>
      </div>
      <div className='answer-panel'>
        {message && message.map((msg, index) =>{
          return(
        <div className='wrapper-answer' key={index}>
          <div className='logo'>
            <img
              src='/chatgpt-logo.png'
              alt=''
            />
          </div>
          <div className='text'>
            <p>{msg}</p>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnswerPanel
