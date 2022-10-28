import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../Hooks/useUser'
import axios from '../api/axios'

import LoginContainerStyle from './style'

const Login = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  let userId = router.query.fb
  if (typeof window !== 'undefined') {
    if (userId) {
      localStorage.setItem('userId', userId)
      // id = userId
    } else {
      userId = localStorage.getItem('userId')
    }
  }
  const login = async (data) => {
    let packageCurr = {}
    try {
      //* To check that user create order if have get package information for make payment
      if (data.order !== null) {
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
        order:data.order
      })
      if (!res.data.access_token) {
        router.replace('/')
      }
      // console.log(data.order)
      //*To check that user create order yet 
      if (data?.order !== null) {
        //* to check user make payment yet 
        if (data.order?.state === 'paid') {
          //* to check user get auth pages by facebook yet
          if (data?.pages === 0) {
            res.data.access_token && router.replace('/user/info/pagemanagement')
          } else {
            res.data.access_token && router.replace('/user/manage')
          }
        } else {
          res.data.access_token && router.replace('/user/payment/paymentoptions')
        }
      } else {
        res.data.access_token && router.replace('/user/packages')
      }
    } catch (error) {
      console.log(error)
      router.replace('/')
    }
  }

  const getFacebookUserData = async (cb) => {
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
  }, [userId])

  return <LoginContainerStyle>ระบบกำลัง redirect ไปที่หน้าการจัดการ</LoginContainerStyle>
}

export default Login
