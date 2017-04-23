import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Search from "./components/search.js";
import Votes from "./components/votes.js";

const Nav = () => (
  <nav className="nav">
    <div className="row">
      <div className="col l9 m6 s4">
        <ul><li><Link to="/">Matt's App</Link></li></ul>
      </div>
      <div className="col l3 m6 s8">
        <ul>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/votes">Votes</Link></li>
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
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/votes" component={Votes} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
