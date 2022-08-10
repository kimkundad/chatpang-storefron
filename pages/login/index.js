import React,{ useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import axios from '../api/axios'

const Login = () => {
    const router = useRouter()
    const {user, setUserData} = useUser()
    const facebookUserId = router.query.fb
  const test = null

  console.log(!test);

    const login = async () => {
      try {
        const res = await axios.post(`/public/facebook-users/${facebookUserId}/login`)
        setUserData({...user,accessToken: res.data.data.access_token})
        if (!user.user?.order) {
          router.replace('/user/packages')
        } else {
          router.replace('/user/manage')
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      login()
    }, [])
    
  return (
    <div className="nosidebar-wrapper text-center">ระบกำลัง redirect ไปที่หน้าการจัดการ</div>
  )
}

export default Login