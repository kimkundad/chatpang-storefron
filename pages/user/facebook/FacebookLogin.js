import React, { useState } from 'react'
import FacebookLoginBTN from 'react-facebook-login'

import axios from 'axios'
import userAxios from '../../api/axios'
import useUser from '../../../Hooks/useUser'
import { useRouter } from 'next/router'
const FacebookLogin = ({ onShowWarning }) => {
  const router = useRouter()
  const [resData, setResData] = useState([])
  const { user,setUserData } = useUser()
  const componentClicked = () => {
    console.log('click')
  }
  const responseFacebook = async (response) => {
    console.log(response)
    setResData(response)
    const fields = 'id,name,email,picture'
    const token = response.accessToken

    try {
      //*get pages List
      const facebookData = await axios.get(`https://graph.facebook.com/me?fields=${fields}&access_token=${token}`)
      console.log('facebook done')
      const pageList = await userAxios.get(`/pages/facebook/${token}`)
      console.log('pageList done')
      const data = facebookData.data
      //*check already signup
      const loginData = await userAxios.post('/user/login', { email: data.email })
      console.log(loginData);
      //*not register
      if (loginData?.data?.msg === "This user account is not found.") {
        console.log("not register");
      //*check if page selected more than 1 redirect to login
      //!move to error
      if (pageList.data?.count > 1) {
        onShowWarning()
        router.push({ pathname: `${router.pathname}` })
      } else {
        const page = pageList.data?.data?.accounts?.data
        const data = response
        const userFacebookData = {
          id: data.id,
          name: data.name,
          email: data.email,
          imgProfile: data.picture.data.url,
          userId: data.userID,
          facebookToken: data.accessToken,
        }
       await setUserData({
          isLogin: true,
          user: userFacebookData,
          pages: page,
          package: {},
        })
        router.push({ pathname: `${router.pathname}/register`})
      }
      //!move to error
      } else {
      //*already register
      const page = pageList.data?.data?.accounts?.data
      await setUserData({
        ...user,
        isLogin: true,
        accessToken: loginData.data?.accessToken,
        user: loginData.data?.data,
        pages: page,
        package: {},
      })
      router.push({ pathname: `${router.pathname}/info/pagemanagement` })
      }
    } catch (error) {
      console.log(error)
        router.push({ pathname: `${router.pathname}` })
    }
  }
  return (
    <div>
      <FacebookLoginBTN
        appId="994698817844987"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,email,pages_manage_engagement,pages_read_engagement,pages_show_list,pages_manage_metadata,pages_messaging"
        cssClass="btn btn-primary btn-lg my-4 rounded-pill"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  )
}

export default FacebookLogin
