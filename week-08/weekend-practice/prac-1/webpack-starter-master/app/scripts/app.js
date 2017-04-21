import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import AllSeries from "./components/allSeries.js";
import Series from "./components/series.js";
import Books from "./components/books.js";
import Book from "./components/book.js";

const Nav = () => (
  <nav>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/series">View All Book Series</Link></li>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route path="/" component={AppRoot} />
          <Route path="/series" component={AllSeries} />
          <Route path="/series/:id" component={Series} />
          <Route path="/series/:id/books" component={Books} />
          <Route path="/series/:id/books/:book_id" component={Book} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
