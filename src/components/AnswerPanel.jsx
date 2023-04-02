import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'




const AnswerPanel = () => {
  const { viewInfo, setViewInfo,newValue, setNewValue ,message, setMessage} = useContext(AppContext)
 
  return (
    <div className='answer-wrapper'>
      <div className='question'>
        <div className='user-logo'>Logo</div>
        <div className='text-question'>{newValue}</div>
      </div>
      <div className='answer-panel'>
        <div className='logo'>
          <img
            src='/chatgpt-logo.png'
            alt=''
          />
        </div>
        <div className='text'>
          <p>{message}</p>

    
        </div>
      </div>
    </div>
  )
}

export default AnswerPanel
