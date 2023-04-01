import React from 'react'
import { FiSun,FiAlertTriangle } from 'react-icons/fi';
import { BsLightningCharge} from 'react-icons/bs';
const Info = () => {
  return (
    <>
    <h1>ChatGPT</h1>
    <div className='info'>
       
      <div className="info-card exemple">
         <p className='info-icon'><FiSun/></p>
         <p  className='info-title'>Examples</p>
        <button>Explain quantum computing in simple terms →</button>
        <button>Got any creative ideas for a 10 year old’s birthday? →</button>
        <button>How do I make an HTTP request in Javascript? →</button>
      </div>
      <div className="info-card">
          <p className='info-icon'><BsLightningCharge/></p>
         <p className='info-title'>Capabilities</p>
        <button>Remembers what user said earlier in the conversation</button>
        <button>Allows user to provide follow-up corrections</button>
        <button>Trained to decline inappropriate requests</button>
      </div>
      <div className="info-card">
      <p className='info-icon'><FiAlertTriangle/></p>
         <p className='info-title'>Limitations</p>
        <button>May occasionally generate incorrect information</button>
        <button>May occasionally produce harmful instructions or biased content</button>
        <button>Limited knowledge of world and events after 2021</button>
      </div>
    </div>
    </>
  )
}

export default Info