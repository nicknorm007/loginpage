// css imports
require('../assets/css/loginpage/core.scss')

// js
import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './App'


const root = document.getElementById('loginpage')


ReactDOM.render((
  <AppContainer>
    <App/>
  </AppContainer>
), root)


if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render((
      <AppContainer>
        <App/>
      </AppContainer>
    ), root);
  })
}
