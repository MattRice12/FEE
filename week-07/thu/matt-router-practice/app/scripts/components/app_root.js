import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import container from '../containers/all.js'
import Home from './home.js'
import Login from './login.js'

class AppRoot extends React.Component {
  render () {
    let CurrentView = this.props.view
    return (
      <main>
        <CurrentView />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
