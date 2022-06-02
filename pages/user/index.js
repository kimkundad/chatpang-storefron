import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import userimg from '../../resources/imgs/chat_pang_icon.png'
import FacebookLogin from './facebook/FacebookLogin'
// import Login from './login'
export default function Home() {
  const router = useRouter()
  const { setUserData } = useUser()
  // useEffect(()=>{
  //   setUserData({isLogin:false})
  // },[])
  const onLogin =() => {
    const userFacebookData = {
      id: 1,
      name: "Chatpang",
      email: "Chatpang@mail.com",
      image: userimg,
    }
    setUserData({
      isLogin: true,
      user: userFacebookData,
      package: {
        name: 'VIP',
        price: '590',
        periodOfUse: '3',
        exp: '30/12/2021',
      },
    })
    router.push({ pathname: `${router.pathname}/register`, query: { userData: userFacebookData } })
  }
  return (
      <div className={`nosidebar-wrapper`}>
        <h4 className='text-center fs-1'>เข้าสู่ระบบ</h4>
        <div className='text-center mt-5'>
          {/* <FacebookLogin /> */}
          <button onClick={()=> onLogin()} className='btn btn-primary btn-lg my-4 rounded-pill'>เข้าสู่ระบบด้วย FACEBOOK</button>
          <div>
            <span>คุณจะถูกขอสิทธิในการเข้าถึงเพจต่างๆ เพื่อใช้ในการตอบคอมเม้นต์ และคอมเม้นต์เข้า inbox</span>
          </div>
        </div>
      </div>
  )
}
