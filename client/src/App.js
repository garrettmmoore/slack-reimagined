import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Chat from './components/Chat';
import Login from './components/Login';
import './App.css';
import { actionTypes } from './reducer';

function App() {
  const [{ user }, dispatch] = useStateValue();

  function getRedirect() {
    auth
      .getRedirectResult()
      .then(function (result) {
        if (result.credential) {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getRedirect();
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app-body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
