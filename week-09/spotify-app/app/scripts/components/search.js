import React from "react";
import { connect } from "react-redux";
import searchBand from "../actions/search_band.js";
import voteBand from "../actions/vote_band.js";
import SearchForm from "./search_form.js";
import AllArtists from "./all_artists.js";
import deleteVote from "../actions/delete_vote.js";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ""
    };

    this.searchHandler = this.searchHandler.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  searchHandler(e) {
    e.preventDefault();
    this.props.dispatch(searchBand(this.state.searchInput));
  }

  handleVote(band) {
    if (this.props.votes.indexOf(band) > -1) {
      this.props.dispatch(deleteVote(band));
    } else {
      this.props.dispatch(voteBand(band));
    }
  }

  changeInput(term) {
    this.setState({
      searchInput: term
    });
  }

  render() {
    let displayBands = (
      <AllArtists
        bands={this.props.bands}
        votes={this.props.votes}
        handleVote={this.handleVote}
      />
    );
    if (this.props.searching) {
      displayBands = <div>Searching...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          <SearchForm
            onClick={this.searchHandler}
            onValueChange={this.changeInput}
          />
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
