import React from 'react';
import { IndexRoute, Redirect, Route } from 'react-router';

import App from './containers/App';
import LoginPage from './containers/Login/index';
import RegisterUser from './containers/Register/index';
import Dashboard from './containers/Dashboard/index';
import EnsureLoggedInContainer from './containers/EnsureLoggedIn';
import RecordAudio from './containers/AudioRecorder';
import HomePage from './components/HomePage';

export const routes = (
  <Route path="/" component={App}>

    <Route path="login" component={LoginPage}/>
    <Route path="register" component={RegisterUser}/>
    <Route path="home" component={HomePage}/>
    <Route component={EnsureLoggedInContainer}>
      <Route path='dashboard' component={Dashboard}/>
      <Route path='record-audio' component={RecordAudio}/>
    </Route>
    <Redirect path="*" to="/"/>
  </Route>
);
