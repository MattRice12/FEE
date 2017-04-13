import React from 'react';
import { connect } from 'react-redux';
import containers from '../containers/all.js';
import resetScore from '../actions/reset_score.js';
import goodbyeView from '../actions/goodbye_view.js';
import Link from './link.js';


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.clickRestart = this.clickRestart.bind(this);
    this.clickQuit = this.clickQuit.bind(this);
  };

  clickRestart () {
    this.props.dispatch(resetScore());
  };

  clickQuit () {
    this.props.dispatch(goodbyeView());
  };

  render () {
    let currentUser = this.props.username;
    return (
      <div className="nav">
        <h1>{currentUser + "'s game!"} </h1>
        <ul className="nav-links">
          <Link dest={"Restart"} onClick={this.clickRestart} />
          <Link dest={"Quit"} onClick={this.clickQuit} />
        </ul>
      </div>
    );
  };
};

export default connect(containers.justUser)(Nav);
