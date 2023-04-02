import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { FiSun,FiLogOut,FiPlus,FiUser } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiOutlineExternalLink } from 'react-icons/hi';
const Aside = () => {
  const { viewInfo, setViewInfo,newValue, setNewValue, message, setMessage } = useContext(AppContext)

  const handleHistoryClick =()=>{
    setViewInfo(true)
    setNewValue('')
    setMessage([])
  }

  return (
    <aside className='aside'>
    
    <div className="history">
    <button onClick={handleHistoryClick}><FiPlus/> New chat</button>
    
    </div>
    <div className="setting">
      <button><RiDeleteBinLine/> Clear Conversation</button>
      <button><FiUser/> Upgrade to Plus</button>
      <button><FiSun/> Light mode</button>
      <button><HiOutlineExternalLink/> Update & FAQ</button>
      <button><FiLogOut/> Log out</button>
    </div>
  </aside>
  )
}

export default Aside