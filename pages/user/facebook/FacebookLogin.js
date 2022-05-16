import React from 'react'
import FacebookLoginBTN from 'react-facebook-login';

import axios
 from 'axios';
const FacebookLogin = () => {
    const componentClicked = () => {
        console.log('click')
    }
    const responseFacebook = (response) => {
        
        console.log(response);
        const fields = 'id,name,email,picture'
        const token = response.accessToken
        axios.get(`https://graph.facebook.com/me?fields=${fields}&access_token=${token}`).then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
        <FacebookLoginBTN
        appId="994698817844987"
        autoLoad={true}
        fields="name,email,userID,picture,accessToken"
        cssClass='btn btn-primary btn-lg my-4 rounded-pill'
        onClick={componentClicked}
        callback={responseFacebook}
        // redirectUri='http://openstrategynetwork.com/_oauth/facebook'
     />
    </div>
  )
}

export default FacebookLogin