import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import loadItems from "../actions/loadItems.js";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/all_items">All Items</NavLink>
      <br />
      <NavLink to="/cart_items">Checkout</NavLink>
    </nav>
  );
};

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default connect(container.allState)(AppRoot);
