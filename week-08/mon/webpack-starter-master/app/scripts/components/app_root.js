import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/start">Start</NavLink>
      <br />
      <NavLink to="/questions/0">Questions</NavLink>
      <br />
      <NavLink to="/results">Results</NavLink>
    </nav>
  );
};

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  onHeaderClicked({ history }) {
    return <h1 onClick={() => history.push("/contact-us")}>Whoa!</h1>;
  }

  render() {
    return (
      <main>
        <NavBar />
        <section>
          <Route render={this.onHeaderClicked} />
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
