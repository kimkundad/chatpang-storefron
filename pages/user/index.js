import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import userimg from '../../resources/imgs/chat_pang_icon.png'
import FacebookLogin from './facebook/FacebookLogin'
import { Modal } from 'react-bootstrap'
// import Login from './login'
export default function Home() {
  const [isShow, setIsShow] = useState(false)
  // const router = useRouter()
  // const { setUserData } = useUser()
  // useEffect(()=>{
  //   setUserData({isLogin:false})
  // },[])
  // const onLogin =() => {
    
  //   const userFacebookData = {
  //     id: 1,
  //     name: "Chatpang",
  //     email: "Chatpang@mail.com",
  //     image: userimg,
  //   }
  //   setUserData({
  //     isLogin: true,
  //     user: userFacebookData,
  //     package: {
  //       name: 'VIP',
  //       price: '590',
  //       periodOfUse: '3',
  //       exp: '30/12/2021',
  //     },
  //   })
  //   router.push({ pathname: `${router.pathname}/register`, query: { userData: userFacebookData } })
  // }
  const onShowWarning = () => {
    setIsShow(!isShow)
  }
  return (
      <div className={`nosidebar-wrapper`}>
        <h4 className='text-center fs-1'>เข้าสู่ระบบ</h4>
        <div className='text-center mt-5'>
          <FacebookLogin onShowWarning={onShowWarning} />
          {/* <button onClick={()=> onLogin()} className='btn btn-primary btn-lg my-4 rounded-pill'>เข้าสู่ระบบด้วย FACEBOOK</button> */}
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
