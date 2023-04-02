import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import Info from './Info'
import Input from './../components/Input'
import Footer from './../components/Footer'
import AnswerPanel from './../components/AnswerPanel'

const Section = () => {
  const { viewInfo, setViewInfo,newValue, setNewValue } = useContext(AppContext)
  const viewAnswer = () => {
    setViewInfo(!viewInfo)
    
   
  }
  
  return (
    <section className='section'>
      <div className='wrapper-info'>
        {viewInfo ? <Info /> : <AnswerPanel />}
      </div>
      <Input
        onClick={viewAnswer}
        inputValue={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <Footer />
    </section>
  )
}

export default Section
