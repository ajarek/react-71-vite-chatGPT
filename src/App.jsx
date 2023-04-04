import { createContext, useState } from 'react'
import Section from './components/Section'
import Aside from './components/Aside'
export const AppContext = createContext()

function App() {
  const [viewInfo, setViewInfo] = useState(true)
  const [newValue, setNewValue] = useState('')
  const [message, setMessage] = useState([])
  const [history, setHistory] = useState([])
  const [light, setLight] = useState(true)
  return (
    <div
      className='App'
      style={
        light
          ? { backgroundColor: ' #343541', color: '#fff' }
          : { backgroundColor: '#c9c9ca ', color: '#343541' }
      }
    >
      <AppContext.Provider
        value={{
          viewInfo,
          setViewInfo,
          newValue,
          setNewValue,
          message,
          setMessage,
          history,
          setHistory,
          light,
          setLight,
        }}
      >
        <Aside />
        <Section />
      </AppContext.Provider>
    </div>
  )
}

export default App
