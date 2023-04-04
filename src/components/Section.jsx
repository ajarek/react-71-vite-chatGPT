import { React, useContext } from 'react'
import { AppContext } from '../App'
import Info from './Info'
import Input from './../components/Input'
import Footer from './../components/Footer'
import AnswerPanel from './../components/AnswerPanel'
const apiKey = import.meta.env.VITE_API_GPT_KEY
const Section = () => {
  const {
    viewInfo,
    setViewInfo,
    newValue,
    setNewValue,
    message,
    setMessage,
    history,
    setHistory,
  } = useContext(AppContext)
  const viewAnswer = () => {
    if (newValue) {
      setViewInfo(false)
    }
    if (!history.includes(newValue)) {
      setHistory([...history, newValue])
    }
    getMessage()
    setNewValue('')
  }
  const getMessage = async () => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: newValue }],
        max_tokens: 1000,
      }),
    }
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        options
      )
      const data = await response.json()
      setMessage([...message, data.choices[0].message.content])
    } catch (error) {
      console.error(error.message)
    }
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
