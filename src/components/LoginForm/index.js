// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', passWord: '', errorMessage: ''}

  getUsername = event => {
    this.setState({userName: event.target.value})
  }
  getPassword = event => {
    this.setState({passWord: event.target.value})
  }
  validateLogin = async event => {
    event.preventDefault()

    const {userName, passWord} = this.state
    const userDetails = {userName, passWord}

    let url = 'https://apis.ccbp.in/login'

    let options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      console.log('Success')
      const {history} = this.props
      history.replace('/')
    } else {
      if (data.error_message === 'invalid username') {
        this.setState({errorMessage: 'Username is not found'})
      }
    }
  }

  render() {
    console.log(this.state)
    const {userName, passWord, errorMessage} = this.state
    return (
      <div className="login-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="login-logo-mobile"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form onSubmit={this.validateLogin}>
          <div className="loginlogo-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-logo"
            />
          </div>
          <label>USERNAME</label>
          <input
            type="text"
            placeholder="Username"
            onChange={this.getUsername}
            value={userName}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Password"
            onChange={this.getPassword}
            value={passWord}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          <p>{errorMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
