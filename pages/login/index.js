import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import axios from '../api/axios'

const Login = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  let userId = router.query.fb

  if (typeof window !== 'undefined') {
    if (userId !== undefined) {
      localStorage.setItem('userId', userId)
      // id = userId
    }else{
      userId = localStorage.getItem('userId')
    }
  }

  // localStorage.setItem('userId', userId)
  // console.log(userId);
  const login = async (data) => {
    let packageCurr = {}
    try {
      if (data.order === null) {
        const resp = await axios.get(`public/packages/${data.order.package.id}`)
        packageCurr = resp.data.data
      }
      const res = await axios.post(`/public/facebook-users/${userId}/login`)
      setUserData({
        ...user,
        user: data,
        facebookUserId: data.facebook_id,
        accessToken: res.data.access_token,
        userId: userId,
        package: packageCurr,
        isLogin: true,
      })
      if (!res.data.access_token) {
        router.replace('/')
      }
      // console.log(!res.data.data?.order)
      if (res.data.data?.order !== null) {
        res.data.access_token && router.replace('/user/manage')
      } else {
        res.data.access_token && router.replace('/user/packages')
      }
    } catch (error) {
      console.log(error)
      router.replace('/')
    }
  }

  const getFacebookUserData = async (cb) => {
    console.log(userId);
    try {
      const res = await axios.get(`/public/facebook-users/${userId}`)
      cb(res.data.data)
    } catch (error) {
      console.log(error)
      router.replace('/')
    }
  }
  useEffect(() => {
    userId !== undefined && userId !== null && getFacebookUserData(login)
    // !userId && router.replace('/')
  }, [userId])

  return <div className="nosidebar-wrapper text-center">ระบกำลัง redirect ไปที่หน้าการจัดการ</div>
}

export default Login
