import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { FiSun, FiLogOut, FiPlus, FiUser } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Hamburger from 'hamburger-react'
const Aside = () => {
  const {
    setViewInfo,
    setNewValue,
    setMessage,
    history,
    setHistory,
    light,
    setLight,
  } = useContext(AppContext)
  const [isOpen, setOpen] = useState(false)
  const handleHistoryClick = () => {
    setViewInfo(true)
    setNewValue('')
    setMessage([])
  }
  useEffect(() => {
    const nodes = document.querySelectorAll('.buttonsId')

    nodes.forEach((node) => {
      node.addEventListener('click', (e) => {
        setNewValue(e.target.textContent)
      })
    })
  })

  return (
    <>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <aside className='aside'>
          <div className='history'>
            <button onClick={handleHistoryClick}>
              <FiPlus /> New chat
            </button>
            {history &&
              history.map((his, index, arr) => {
                return (
                  <button
                    className='buttonsId'
                    key={index}
                  >
                    {his}
                  </button>
                )
              })}
          </div>

          <div className='setting'>
            <button onClick={() => setHistory([])}>
              <RiDeleteBinLine /> Clear Conversation
            </button>
            <button>
              <a
                href='https://chat.openai.com/chat'
                target='_blank'
              >
                <FiUser /> Upgrade to Plus
              </a>
            </button>
            <button onClick={() => setLight(!light)}>
              <FiSun />
              {light ? ' Light mode' : ' Dark mode'}
            </button>
            <button>
              <a
                href='https://help.openai.com/en/collections/3742473-chatgpt'
                target='_blank'
              >
                <HiOutlineExternalLink /> Update & FAQ
              </a>
            </button>
            <button>
              <a href='https://help.openai.com/en/'>
                <FiLogOut /> Log out
              </a>
            </button>
          </div>
        </aside>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#fff'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </>
  )
}

export default Aside
