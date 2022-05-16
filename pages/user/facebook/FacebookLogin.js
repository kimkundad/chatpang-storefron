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
        onClick={componentClicked}
        callback={responseFacebook} 
     />
    </div>
  )
}

export default FacebookLogin