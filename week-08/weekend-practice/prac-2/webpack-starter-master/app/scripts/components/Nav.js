import React from "react";
import getHeroes from "../actions/get_heroes.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // this.props.dispatch(getHeroes());
  }

  render() {
    return (
      <nav className="nav">
        <ul className="row">
          <li><Link to="/">Go home</Link></li>
          <li onClick={this.clickHandler}>
            <Link to="/superheroes">
              See all Superheroes
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(state => state)(Nav);
