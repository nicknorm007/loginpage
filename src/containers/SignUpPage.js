import React from 'react';
import SignUpForm from '../components/SignUpForm';
import server from '../services/server';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SignUpPage extends React.Component {

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
        firstname: '',
        lastname: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {

    event.preventDefault();

    let user = {'firstname':this.state.user.firstname, 'lastname':this.state.user.lastname,
      'email':this.state.user.email, 'password': this.state.user.password};

    server.registerUser(user).then( e => {
      //console.log(e);

    })
    .catch(error => {

      console.log(error);

    });


  }

  /**
   * Render the component.
   */
  render() {
    return (
      <MuiThemeProvider>
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </MuiThemeProvider>
    );
  }

}

export default SignUpPage;
