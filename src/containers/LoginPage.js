import React from 'react';
import LoginForm from '../components/LoginForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import server from '../services/server';

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {

    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);

    let user = {'email':this.state.user.email, 'password': this.state.user.password};

    server.loginUser(user).then( e => {
      console.log(e);

    })
    .catch(error => {

      console.log(error);

    });



  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <MuiThemeProvider>
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
      </MuiThemeProvider>
    );
  }

}

export default LoginPage;
