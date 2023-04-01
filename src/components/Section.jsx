import React, { useState } from 'react'
import Info from './Info'
import Input from './../components/Input'
import Footer from './../components/Footer'
import AnswerPanel from './../components/AnswerPanel'

const Section = () => {
  const [viewInfo, setViewInfo] = useState(true)
  const viewAnswer = () => {
    setViewInfo(!viewInfo)
  }
  return (
    <section className='section'>
     
      <div className='wrapper-info'>
         {viewInfo ? <Info /> : <AnswerPanel/>}
      </div>
      <Input onClick={viewAnswer} />
      <Footer />
    </section>
  )
}

export default Section
