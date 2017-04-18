import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import AllItems from "./components/all-items.js";
import CartItems from "./components/cart-items.js";
import ItemDetail from "./components/item-detail.js";

const FooBar = () => <div>Hi</div>;

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <main>
          <Route path="/" component={AppRoot} />
          <Route path="/all_items" component={AllItems} />
          <Route path="/cart_items" component={CartItems} />
          <Route path="/item/:id" component={ItemDetail} />
        </main>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
