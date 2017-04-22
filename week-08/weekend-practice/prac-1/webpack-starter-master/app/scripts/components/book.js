import React from "react";
import { connect } from "react-redux";

class Book extends React.Component {
  render() {
    let paramId = this.props.location.pathname[
      this.props.location.pathname.length - 1
    ];
    let urlSeries = this.props.bookSeries.filter(series => {
      return series.id === Number(this.props.match.params.id);
    })[0];
    let urlBook = urlSeries.books.filter(book => {
      return book.id === Number(paramId);
    })[0];
    let currentBook = this.props.currentBook || urlBook;

    return (
      <div>
        {currentBook.title + ": " + currentBook.pages + " pages."}
      </div>
    );
  }
}

export default connect(state => state)(Book);
