import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({ closeToast }) => {
  return (
    <div>Something went wrong
      <button onClick={closeToast}>Close</button>
    </div>
  )
}

toast.configure()
function ToastNotifications() {
  const notify = () => {
    toast('Basic Notification', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 8000
    })
    toast.success('SUCCESS Notification', { position: toast.POSITION.TOP_CENTER })
    toast.info('INFO Notification', { position: toast.POSITION.TOP_RIGHT })
    toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_LEFT, autoClose: false })
    toast.error('ERROR Notification', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: false })
    toast('Basic Notification', { position: toast.POSITION.BOTTOM_CENTER })
  }
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  )
}

export default ToastNotifications
