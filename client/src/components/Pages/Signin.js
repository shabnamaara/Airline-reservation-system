// Modified Signin.js
import React, { Component } from 'react';
import Axios from 'axios';
import './styles/Signin.css';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class Signin extends Component {
  Swal = withReactContent(Swal);

  constructor(props) {
    super(props);
    this.state = {
      usernameLogin: '',
      passwordLogin: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      usernameLogin: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      passwordLogin: event.target.value,
    });
  };

  Login = (event) => {
    event.preventDefault();

    Axios.post('http://localhost:8080/login', {
      username: this.state.usernameLogin,
      password: this.state.passwordLogin,
    })
      .then((response) => {
        if (response.data.msg) {
          Swal.fire('Invalid Login!', '', 'error');
        } else {
          Swal.fire('Login Success!', '', 'success');
          // Use history.push to navigate to HomePage.js
          this.props.history.push('/homepage', { state: { username: response.data.username } });
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        Swal.fire('Error during login!', '', 'error');
      });
  };

  render() {
    return (
      <div className="Auth-form-container bg-image">
        <form className="Auth-form" onSubmit={this.Login}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                name="emailLogin"
                value={this.state.usernameLogin}
                onChange={this.handleUsernameChange}
                className="form-control mt-1"
                placeholder="e.g John@example.com"
                style={{ width: '320px' }}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                onChange={this.handlePasswordChange}
                className="form-control mt-1"
                placeholder="e.g rXhAz29$%1"
                required
                style={{ width: '320px' }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="Home">password?</a>
            </p>
            <p className="forgot-password text-right mt-2">
              Register <a href="sign-up">signup</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);