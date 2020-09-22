import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, googleProvider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithRedirect(googleProvider)
      .then()
      .catch(error => {
        console.log(error);
        alert(error?.message);
      });
  };

  const signInAnonymous = () => {
    auth
      .signInAnonymously()
      .then(result => {
        // push the user into the data layer
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch(error => {
        console.log(error);
        alert(error?.message);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://i.picsum.photos/id/389/200/200.jpg?hmac=wMpkVNteeBzuxyzbDb9fXZfr-aCfp8scZWMabXtk7qU"
          alt=""
        />
        <h1>Sign in to Reimagined</h1>
        <p>reimagined.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
        <Button onClick={signInAnonymous}>Sign in as Guest</Button>
      </div>
    </div>
  );
}
export default Login;
