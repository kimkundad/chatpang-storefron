import React from 'react'
import FacebookLoginBTN from 'react-facebook-login'

import axios from 'axios'
import userAxios from '../../api/axios'
import useUser from '../../../Hooks/useUser'
import { useRouter } from 'next/router'
const FacebookLogin = ({onShowWarning}) => {
  const router = useRouter()
  const { setUserData } = useUser()
  const componentClicked = () => {
    console.log('click')
  }
  const responseFacebook = async (response) => {
    console.log(response)
    const fields = 'id,name,email,picture'
    const token = response.accessToken

    try {
      //get pages List
      const facebookData = await axios.get(`https://graph.facebook.com/me?fields=${fields}&access_token=${token}`)
      console.log("facebook done");
      const pageList = await userAxios.get(`/pages/facebook/${token}`)
      console.log("pageList done");
      const data = facebookData.data

      //check already signup
      const loginData = await userAxios.post('/user/login', { email: data.email })
      //not register
      if (loginData?.data?.data === null) {
        //check if page selected more than 1 redirect to login
        // if (pageList.data?.count > 1) {
        if (pageList.data?.count === 1) {
          onShowWarning()
          router.push({ pathname: `${router.pathname}/` })
        } else {
          const page = pageList.data?.data?.accounts?.data
          const data = response.data
          const userFacebookData = {
            id: data.id,
            name: data.name,
            email: data.email,
            imgProfile: data.picture.data.url,
            userId: data.userID,
            facebookToken: data.accessToken,
          }
          setUserData({
            isLogin: true,
            user: userFacebookData,
            pages: page,
            // package: {
            //   name: 'VIP',
            //   price: '590',
            //   periodOfUse: '3',
            //   exp: '30/12/2021',
            // },
          })
          router.push({ pathname: `${router.pathname}/register`, query: { userData: userFacebookData } })
        }
      } else {
        //already register
        const page = pageList.data?.data?.accounts?.data
        setUserData({
          isLogin: true,
          accessToken:loginData.data?.accessToken,
          user: loginData.data?.data,
          pages: page,
          // package: {
          //   name: 'VIP',
          //   price: '590',
          //   periodOfUse: '3',
          //   exp: '30/12/2021',
          // },
        })
        router.push({ pathname: `${router.pathname}/packages`})
      }
    } catch (error) {
      console.log(error)
    }
    //   .then((response) => {
    //     console.log(response.data);
    //     const data = response.data
    //     const userFacebookData = {
    //       id: data.id,
    //       name: data.name,
    //       email: data.email,
    //       imgProfile: data.picture.data.url,
    //       userId:data.userID,
    //       facebookToken:data.accessToken
    //     }
    //     setUserData({
    //       isLogin: true,
    //       user: userFacebookData,
    //       package: {
    //         name: 'VIP',
    //         price: '590',
    //         periodOfUse: '3',
    //         exp: '30/12/2021',
    //       },
    //     })
    //     router.push({ pathname: `${router.pathname}/register`, query: { userData: userFacebookData } })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }
  return (
    <div>
      <FacebookLoginBTN
        appId="994698817844987"
        autoLoad={false}
        fields="name,email,picture,accessToken"
        scope="public_profile,email,pages_manage_engagement,pages_read_engagement,pages_show_list,pages_manage_metadata,pages_messaging"
        cssClass="btn btn-primary btn-lg my-4 rounded-pill"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  )
}

export default FacebookLogin
