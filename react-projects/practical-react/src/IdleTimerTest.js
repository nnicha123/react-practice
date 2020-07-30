import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function IdleTimerTest() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const idleTimerRef = useRef(null)
  const sessionTimeoutRef = useRef(null)
  const onIdle = () => {
    console.log('User is idle')
    setModalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(logOut, 5000)
  }
  const logOut = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef)
    setIsLoggedIn(false)
  }
  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef)
    setIsLoggedIn(true)
  }
  return (
    <div>
      {
        isLoggedIn ? <h2>Hello Nicha</h2> : <h2>Hello Guest</h2>
      }
      <Modal isOpen={modalIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}></IdleTimer>
    </div>
  )
}

export default IdleTimerTest
