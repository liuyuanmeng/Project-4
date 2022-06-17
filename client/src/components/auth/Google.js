import React from 'react'
import { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
// const Google = ({ setGoogleLogin }) => {
//   const responseGoogle = (response) => {
//     console.log('response', response)
//     setGoogleLogin(response)
//   }

const Google = ({ setGoogleLogin }) => {  
  const googleKey = '676978684985-stdsbjqlqhtn185giaojapbvjoabc84n.apps.googleusercontent.com'
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        client_id: { googleKey },
        scope: 'email',
      })
    }

    gapi.load('client:auth2', start)
  }, [])

  // **you can access the token like this**
  // const accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken);

  const onSuccess = response => {
    console.log('SUCCESS', response)
    setGoogleLogin(response)
  }
  const onFailure = response => {
    console.log('FAILED', response)
    setGoogleLogin(response)
  }

  

  return (
    <div className="google">
      <br />
      <GoogleLogin
        // clientId={googleKey}
        buttonText="Use Google Authentication"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Google
