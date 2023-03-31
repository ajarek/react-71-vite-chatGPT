import React from 'react'
import Info from './Info'
import Input from './../components/Input'
import Footer from './../components/Footer'

const Section = () => {
  
  return (
    <section className='section'>
        <h1>ChatGPT</h1>
       <Info/>
       <Input/>
       <Footer/>
      </section>
  )
}

export default Section