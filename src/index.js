// static imports
require('../assets/css/loginpage/core.scss')

// js
import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import {AppContainer} from 'react-hot-loader'
import App from './App'

import SignUpPage from './containers/SignUpPage'
import LoginPage from './containers/LoginPage'

const root = document.getElementById('loginpage')

export const Container = () => (

  <AppContainer>
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/login" component={LoginPage}/>
    </Switch>
  </Router>
  </AppContainer>

);


ReactDOM.render(<Container/>, root)
