import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import axios from '../api/axios'

const Login = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  // const userId = router.query.fb || window.localStorage.getItem('userId')
  const userId = router.query.fb
  // localStorage.setItem('userId', userId)
  // console.log(userId);
  const login = async (data) => {
    try {
      const resp = await axios.get(`public/packages/${data.order.package.id}`)
      const res = await axios.post(`/public/facebook-users/${userId}/login`)
      setUserData({
        ...user,
        user: data,
        facebookUserId: data.facebook_id,
        accessToken: res.data.access_token,
        userId: userId,
        package: resp.data.data,
        isLogin: true,
      })
      if (!res.data.access_token) {
        router.replace('/')
      }
      console.log(!res.data.data?.order)
      if (res.data.data?.order !== null) {
        res.data.access_token && router.replace('/user/manage')
      } else {
        res.data.access_token && router.replace('/user/packages')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getFacebookUserData = async (cb) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('userId', userId)
      }
      const res = await axios.get(`/public/facebook-users/${userId}`)
      // console.log(res.data.data);
      // const { facebook_id } = res.data.data
      // setUserData({ ...user,user:res.data.data, facebookUserId : facebook_id })
      cb(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    userId && getFacebookUserData(login)
    !userId && router.replace('/')
  }, [userId])

  // useEffect(() => {
  //   userId && login()
  // }, [userId])

  return <div className="nosidebar-wrapper text-center">ระบกำลัง redirect ไปที่หน้าการจัดการ</div>
}

export default Login
