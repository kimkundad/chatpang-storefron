import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import userimg from '../../resources/imgs/chat_pang_icon.png'
import FacebookLogin from './facebook/FacebookLogin'
import { Modal } from 'react-bootstrap'
import axios from '../api/axios'
// import Login from './login'
export default function Home() {
  const router = useRouter()
  const [isShow, setIsShow] = useState(false)
  const onShowWarning = () => {
    setIsShow(!isShow)
  }

  const onLogin = async () => {
    //*got ot new tap
    window.open('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/auth')
    //*stay same page
    // router.replace('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/auth')
  }

  return (
      <div className={`nosidebar-wrapper`}>
        <h4 className='text-center fs-1'>เข้าสู่ระบบ</h4>
        <div className='text-center mt-5'>
          {/* <FacebookLogin onShowWarning={onShowWarning} /> */}
          <button onClick={()=> onLogin()} className='btn btn-primary btn-lg my-4 rounded-pill fs-3.'>เข้าสู่ระบบด้วย FACEBOOK</button>
          <div>
            <span>คุณจะถูกขอสิทธิในการเข้าถึงเพจต่างๆ เพื่อใช้ในการตอบคอมเม้นต์ และคอมเม้นต์เข้า inbox</span>
          </div>
        </div>
        <Modal onShow={onShowWarning} onHide={onShowWarning}  centered>
          <Modal.Body>
            <div className='text center'>
              <h3>สำหรับลูกค้าที่พึ่งลงทะเบียนสารมารถเลือกได้ 1 เพจเท่านั้น</h3>
              <p>กรุณาทำการ LOGIN อีกครั้ง</p>
              <p>แล้วทำการเลือก 1 เพจ</p>
              <p>Edit setting แล้วเลือก 1 เพจ</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
  )
}
