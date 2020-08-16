import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Authenticate from './containers/authentication/Authenticate';
import Profile from './containers/profile/Profile';

function App() {

  return(
    <Switch>
      <Route path="/authenticate" exact component={Authenticate}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/" exact component={Landing}/>
    </Switch>

  )
}

export default App;
