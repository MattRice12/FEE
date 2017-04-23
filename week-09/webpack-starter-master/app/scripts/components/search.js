import React from "react";
import { connect } from "react-redux";
import searchBand from "../actions/search_band.js";
import voteBand from "../actions/vote_band.js";
import ArtistBlock from "./artist_block.js";
import SearchForm from "./search_form.js";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.searchHandler = this.searchHandler.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  searchHandler(e) {
    e.preventDefault();
    this.props.dispatch(searchBand());
  }

  handleVote(band) {
    this.props.dispatch(voteBand(band));
  }

  render() {
    let displayBands = (
      <div>
        {this.props.bands.map((band, index) => {
          return (
            <ArtistBlock
              key={index}
              band={band}
              votes={this.props.votes}
              handleVote={() => this.handleVote(band)}
            />
          );
        })}
      </div>
    );
    if (this.props.searching) {
      displayBands = <div>Searching...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          <SearchForm onClick={this.searchHandler} />
        </div>
        <div className="row">
          <div className="col s12">
            {displayBands}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Search);
