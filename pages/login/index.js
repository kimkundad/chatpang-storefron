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
        setUserData({...user,accessToken: res.data.access_token, userId: userId, isLogin: true})
        if (!res.data.access_token) {
          router.replace('/')
        }
        console.log(!res.data.data?.order);
        if (res.data.data?.order !== null) {
          res.data.access_token && router.replace('/user/manage')
        } else {
          res.data.access_token && router.replace('/user/packages')
        }
      } catch (error) {
        console.log(error);
      }
    }

    const getFacebookUserData = async (cb) => {
      try {
        const res  = await axios.get(`/public/facebook-users/${userId}`)
        console.log(res.data);
        const { facebook_id } = res.data.data
        await setUserData({ ...user,user:res.data.data, facebookUserId : facebook_id })
      } catch (error) {
        console.log(error);
      }
      cb()
    }
    useEffect(()=>{
      userId && getFacebookUserData(login())
    },[userId])
    

    // useEffect(() => {
    //   userId && login()
    // }, [userId])
    
  return (
    <div className="nosidebar-wrapper text-center">ระบกำลัง redirect ไปที่หน้าการจัดการ</div>
  )
}

export default Login