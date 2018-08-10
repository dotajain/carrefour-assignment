import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FromGroup from './FromGroup'

import { post } from '../helper/fetch'

const LOGIN_URL = 'https://reqres.in/api/login'

class Form extends Component {
  state = {
    userName: '',
    password: '',
    error: {
      userName: false,
      password: false,
    },
    rememberLogin: false,
  }
  _handleUserNameChange = event => {
    this.setState({ userName: event.target.value })
  }
  _handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  _rememberLogin = () => {
    this.setState(currState => ({
      rememberLogin: !currState.rememberLogin,
    }))
  }

  _login = e => {
    e.preventDefault()
    const { userName, password } = this.state
    const error = {
      userName: !userName,
      password: !password,
    }
    this.setState({ error })
    if (userName && password) {
      const body = {
        email: userName,
        password: password,
      }
      post({
        url: LOGIN_URL,
        success: this._loginSuccess,
        failure: this._loginFaliure,
        body,
      })
    }
  }

  _loginSuccess = data => {
    this.props.login(data)
  }

  _loginFaliure = data => {
    this.props.login(data)
  }

  render() {
    const { userName, password, rememberLogin, error } = this.state
    return (
      <form className="form form-login" onSubmit={this._login}>
        <FromGroup
          type="text"
          id="userName"
          name="userName"
          className="form-control"
          placeholder="Username"
          label="Username"
          value={userName}
          onChange={this._handleUserNameChange}
          error={error.userName}
        />

        <FromGroup
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          label="Password"
          value={password}
          onChange={this._handlePasswordChange}
          error={error.password}
        />

        <div className="form-footer">
          <div className="custom-control custom-checkbox">
            <input
              checked={rememberLogin}
              type="checkbox"
              className="custom-control-input"
              id="keepmeLoggedIn"
              onClick={this._rememberLogin}
            />
            <label className="custom-control-label" htmlFor="keepmeLoggedIn">
              Keep me logged in
            </label>
          </div>
          <div className="forgot-pass">
            <button className="btn-link">Forgot password?</button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Sign In
        </button>
      </form>
    )
  }
}

Form.propTypes = {
  login: PropTypes.func.isRequired,
}

export default Form
