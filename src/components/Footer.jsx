import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'

const Footer = () => {
  const { viewInfo, setViewInfo,newValue, setNewValue, message, setMessage, history, setHistory, light, setLight } = useContext(AppContext)
  return (
    <footer className='footer'>
      <p>
        <a
          href='https://help.openai.com/en/articles/6825453-chatgpt-release-notes'
          target='_blanc'
          style={light?{color:'#c9c9ca'}:{color:'#202123'}}
        >
          ChatGPT Mar 14 Version
        </a>{' '}
        . Free Research Preview. Our goal is to make AI systems more natural and
        safe to interact with. Your feedback will help us improve.
      </p>
    </footer>
  )
}

export default Footer
