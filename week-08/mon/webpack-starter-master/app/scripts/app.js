import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Start from "./components/start.js";
import Questions from "./components/questions.js";
import Result from "./components/result.js";
import Question from "./components/question.js";

const FooBar = () => <div>Hi</div>;

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={AppRoot} />
          <Route path="/start" component={Start} />
          <Route path="/questions" component={Questions} />
          <Route path="/result" component={Result} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
