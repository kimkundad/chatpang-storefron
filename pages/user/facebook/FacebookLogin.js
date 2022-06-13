import React from 'react'
import FacebookLoginBTN from 'react-facebook-login'

import axios from 'axios'
import useUser from '../../../Hooks/useUser'
import { useRouter } from 'next/router'
const FacebookLogin = () => {
  const router = useRouter()
  const { setUserData } = useUser()
  // const componentClicked = () => {
  //   console.log('click')
  // }
  const responseFacebook = async (response) => {
    console.log(response)
    const fields = 'id,name,email,picture'
    const token = accessToken
    axios
      .get(`https://graph.facebook.com/me?fields=${fields}&access_token=${token}`)
      .then((response) => {
        // console.log(response.data);
        const data = response.data
        const userFacebookData = {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.picture.data.url,
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
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onLogin = async () => {
    const { authResponse } = await new Promise(window.FB.login);
    if (!authResponse) return;
    await responseFacebook(authResponse.accessToken);

  }
  return (
    <div>
      {/* <FacebookLoginBTN
        appId="994698817844987"
        autoLoad={false}
        fields="name,email,picture,accessToken"
        cssClass="btn btn-primary btn-lg my-4 rounded-pill"
        onClick={componentClicked}
        callback={responseFacebook}
      /> */}
      <button className="btn btn-facebook" onClick={onLogin}>
        <i className="fa fa-facebook mr-1"></i>
        Login with Facebook
      </button>
    </div>
  )
}

export default FacebookLogin
