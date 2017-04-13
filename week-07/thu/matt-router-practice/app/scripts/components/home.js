import React from 'react';
import { connect } from 'react-redux';
import containers from '../containers/all.js';
import NavBar from './navBar.js';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <NavBar />
        <section>
          <h1>Welcome {this.props.username}</h1>
        </section>
      </div>
    )
  }
}

export default connect(containers.allState)(Home);
