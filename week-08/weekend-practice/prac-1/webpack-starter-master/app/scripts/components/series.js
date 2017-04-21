import React from "react";
import { connect } from "react-redux";

class Series extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let paramId = this.props.match.params.id;

    console.log(this.props.match.params.id);

    let urlSeries = this.props.bookSeries.filter(series => {
      return series.id === Number(this.props.match.params.id);
    })[0];

    console.log(urlSeries);
    var currentSeries = this.props.currentSeries || urlSeries;

    console.log(currentSeries);

    return (
      <div>
        {currentSeries.title}
        <ul>
          {currentSeries.books.map((book, index) => {
            return <li key={index}>{book.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(Series);
