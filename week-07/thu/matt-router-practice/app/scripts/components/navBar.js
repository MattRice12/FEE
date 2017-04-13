import React from 'react';
import { Link } from 'react-router-dom'
import logoutAction from '../actions/logoutAction.js'
import { connect } from 'react-redux'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.logOut = this.logOut.bind(this)
  }

  logOut () {
    this.props.dispatch(logoutAction())
  }

  render () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <br />
        <a href="#" onClick={this.logOut}>Logout</a>
      </nav>
    )
  }
}

export default connect()(NavBar)
