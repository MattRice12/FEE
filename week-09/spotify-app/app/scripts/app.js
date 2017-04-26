import store from "./store.js";
import React from "react";
import { Button, Icon } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Search from "./components/search.js";
import Votes from "./components/votes.js";

const Nav = () => (
  <nav className="nav blue darken-2">
    <div className="row">
      <div className="col l9 m8 s6">
        <ul><li role="navigation"><Link to="/">Matt's App</Link></li></ul>
      </div>
      <div className="col l3 m4 s6">
        <ul>
          <li role="navigation">
            <Link to="/search"><Icon>search</Icon></Link>
          </li>
          <li role="navigation"><Link to="/votes">Votes</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route path="/" component={AppRoot} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/votes" component={Votes} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
