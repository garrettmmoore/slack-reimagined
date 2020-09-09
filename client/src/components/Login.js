import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <img
          src='https://i.picsum.photos/id/389/200/200.jpg?hmac=wMpkVNteeBzuxyzbDb9fXZfr-aCfp8scZWMabXtk7qU'
          alt=''
        />
        <h1>Sign in</h1>
        <p></p>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
