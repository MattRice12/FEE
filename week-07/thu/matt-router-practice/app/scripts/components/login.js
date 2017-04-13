import React from 'react';
import { connect } from 'react-redux';
import containers from '../containers/all.js';
import loginAction from '../actions/loginAction.js'


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    let username = this.refs.username.value
    this.props.dispatch(loginAction(username))
  }

  render () {
    return (
      <div>
        <h1>Please Log In!</h1>
        <input ref="username" />
        <button onClick={this.clickHandler}>Login</button>
      </div>
    )
  }
}

export default connect(containers.allState)(Login)
