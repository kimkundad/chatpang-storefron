import React from 'react'
import FacebookLoginBTN from 'react-facebook-login';

const FacebookLogin = () => {
    const componentClicked = () => {
        console.log('click')
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
  return (
    <div>
        <FacebookLoginBTN
        appId="994698817844987"
        autoLoad={true}
        fields="name,email,userID,accessToken"
        cssClass='btn btn-primary btn-lg my-4 rounded-pill'
        onClick={componentClicked}
        callback={responseFacebook}
        // redirectUri='http://openstrategynetwork.com/_oauth/facebook'
     />
    </div>
  )
}

export default FacebookLogin