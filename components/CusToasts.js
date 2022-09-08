import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const CusToasts = ({ show, toggleShow, text, type }) => {
  // const [show, setShow] = useState(true)

  // const toggleShow= () => setShow(!show)
  return (
    // <ToastContainer position='top-end' className='toast-container' >
      <Toast show={show} onClose={toggleShow} bg={type} delay={5000} autohide>
        <Toast.Header><strong className=' toast-content me-auto'>Chat pang แจ้งเตือน</strong></Toast.Header>
        <Toast.Body className='toast-content'>{text}</Toast.Body>
      </Toast>
    // </ToastContainer>
  )
}

export default CusToasts
