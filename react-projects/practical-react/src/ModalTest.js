import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function ModalTest() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              background: 'grey'
            },
            content: {
              background: 'tomato',
              color: 'white'
            }
          }
        }>
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)} > Close</button>
      </Modal>
    </div>
  )
}

export default ModalTest
