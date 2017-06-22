import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage';

export default class App extends React.Component {
  render () {
    return <MuiThemeProvider>
      <HomePage />
    </MuiThemeProvider>

  }
}
