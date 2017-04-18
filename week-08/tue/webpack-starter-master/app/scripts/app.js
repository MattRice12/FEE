import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import allItems from "./components/all-items.js";
import Item from "./components/Item.js";

const FooBar = () => <div>Hi</div>;

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <main>
          <Route path="/" component={AppRoot} />
          <Route path="/all_items" component={allItems} />
          <Route path="/item/:id" component={Item} />
        </main>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
