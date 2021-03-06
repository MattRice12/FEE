import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import getVotes from "../actions/get_votes.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getVotes());
  }

  render() {
    return <main />;
  }
}

export default connect(state => state)(AppRoot);
