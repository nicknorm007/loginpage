// css imports
require('../assets/css/loginpage/core.scss')

// js
import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'

import {Container} from './index'


const root = document.getElementById('loginpage')


ReactDOM.render((
  <Container />
), root)


if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render((
      <Container />
    ), root);
  })
}
