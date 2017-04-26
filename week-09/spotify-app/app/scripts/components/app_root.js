import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import getVotes from "../actions/get_votes.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.votes.length < 1) {
      this.props.dispatch(getVotes());
    }
  }

  render() {
    return <main />;
  }
}

export default connect(state => state)(AppRoot);
