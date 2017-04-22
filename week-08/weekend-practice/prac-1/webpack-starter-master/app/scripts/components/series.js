import React from "react";
import { connect } from "react-redux";
import goToBook from "../actions/goTobook.js";

class Series extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(book) {
    this.props.dispatch(goToBook(book));
    this.props.history.push(
      "/series/" + this.props.match.params.id + "/books/" + book.id
    );
  }

  render() {
    let paramId = this.props.match.params.id;
    let urlSeries = this.props.bookSeries.filter(series => {
      return series.id === Number(this.props.match.params.id);
    })[0];
    let currentSeries = this.props.currentSeries || urlSeries;

    return (
      <div>
        <h3>{currentSeries.title}</h3>

        <ul>
          {currentSeries.books.map((book, index) => {
            return (
              <li key={index}>
                {book.title}
                <button onClick={() => this.clickHandler(book)}>Check</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(Series);
