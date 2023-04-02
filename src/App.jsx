import {createContext, useState} from 'react'
import Section from './components/Section'
import Aside from './components/Aside'
export const AppContext = createContext()
function App() {
  const [viewInfo, setViewInfo] = useState(true)
  const [newValue, setNewValue] = useState('')
  return (
    <div className='App'>
      <AppContext.Provider value={{viewInfo, setViewInfo,newValue, setNewValue }}>
     <Aside/>
     <Section/>
     </AppContext.Provider>
    </div>
  )
}

export default App
