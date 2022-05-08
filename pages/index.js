import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from '../Hooks/useUser'

import styles from '../styles/Home.module.css'
// import Login from './login'
export default function Home() {
  const router = useRouter()
  const { setUserData } = useUser()
  useEffect(()=>{
    setUserData({isLogin:false})
  },[])
  return (
      <div className={`page-wrapper`}>
        <h4 className='text-center fs-1'>เข้าสู่ระบบ</h4>
        <div className='text-center mt-5'>
          <button onClick={()=> router.push('/pagelist')} className='btn btn-primary btn-lg my-4 rounded-pill'>เข้าสู่ระบบด้วย FACEBOOK</button>
          <div>
            <span>คุณจะถูกขอสิทธิในการเข้าถึงเพจต่างๆ เพื่อใช้ในการตอบคอมเม้นต์ และคอมเม้นต์เข้า inbox</span>
          </div>
        </div>
      </div>
  )
}
