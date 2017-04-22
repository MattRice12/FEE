import React from "react";
import { connect } from "react-redux";
import containers from "../containers/all.js";
import goToSeries from "../actions/goToSeries.js";

class AllSeries extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(series) {
    this.props.dispatch(goToSeries(series));
    this.props.history.push("/series/" + series.id);
  }

  render() {
    return (
      <main>
        <h3>Series</h3>
        <ul>
          {this.props.bookSeries.map((series, index) => {
            return (
              <li key={index}>
                {series.title}
                <button onClick={() => this.handleClick(series)}>View</button>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default connect(containers.allState)(AllSeries);
