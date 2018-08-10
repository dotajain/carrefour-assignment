import React, { Component } from 'react'

import Form from './Form'

class Login extends Component {
  state = {
    isLogin: false,
  }
  _isLoginSuccess = token => {
    this.setState({ isLogin: token.token }, () => {
      setTimeout(() => {
        this.setState({ isLogin: false })
      }, 3000)
    })
  }

  render() {
    const { isLogin } = this.state
    return (
      <section className="login">
        <div className="box">
          {isLogin && <div className="login-success">Login Success!</div>}
          <div className="box-header">
            <h1>Sign In Now</h1>
            <p>Unlock awesome features!</p>
          </div>
          <div className="box-body">
            <Form login={this._isLoginSuccess} />
          </div>
        </div>
      </section>
    )
  }
}

export default Login
