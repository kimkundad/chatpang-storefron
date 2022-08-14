import React,{ useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import axios from '../api/axios'

const Login = () => {
    const router = useRouter()
    const {user, setUserData} = useUser()
    const userId = router.query.fb
console.log(userId);
    const login = async () => {
      try {
        const res = await axios.post(`/public/facebook-users/${userId}/login`)
        setUserData({...user,accessToken: res.data.access_token})
        if (!res.data.access_token) {
          router.replace('/')
        }
        if (!user.user?.order) {
          res.data.access_token && router.replace('/user/packages')
        } else {
          res.data.access_token && router.replace('/user/manage')
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      userId && login()
    }, [userId])
    
  return (
    <div className="nosidebar-wrapper text-center">ระบกำลัง redirect ไปที่หน้าการจัดการ</div>
  )
}

export default Login