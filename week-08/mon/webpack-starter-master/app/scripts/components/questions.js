import React from "react";
import { connect } from "react-redux";
import Question from "./question.js";
import containers from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.questions.map((question, index) => {
          return <NavLink key={index} to={`/questions/${index}`} />;
        })}
        <Route path={`${this.props.match.url}/:id`} component={Question} />
      </ul>
    );
  }
}

export default connect(containers.allState)(Questions);
