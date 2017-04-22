import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Superheroes from "./components/superheroes.js";
import Superhero from "./components/superhero.js";
import Nav from "./components/Nav.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route path="/" component={AppRoot} />
          <Route exact path="/superheroes" component={Superheroes} />
          <Route exact path="/superheroes/:id" component={Superhero} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
