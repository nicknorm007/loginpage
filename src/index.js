// static imports
require('../assets/css/loginpage/core.scss')

// js
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const root = document.getElementById('loginpage')


ReactDOM.render(<App/>, root)
