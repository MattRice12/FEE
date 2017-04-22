import React from "react";
import { connect } from "react-redux";

class Book extends React.Component {
  render() {
    this.props.match;
    let paramId = this.props.match.params.id;
    let urlSeries = this.props.bookSeries.filter(series => {
      return series.id === Number(this.props.match.params.id);
    })[0];
    let urlBook = urlSeries.books.filter(book => {
      return book.id === Number(this.props.match.params.id);
    })[0];
    let currentBook = this.props.currentBook || urlSeries;

    return (
      <div>
        {currentBook.title}
      </div>
    );
  }
}

export default connect(state => state)(Book);
