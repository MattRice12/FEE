import React from "react";
import { connect } from "react-redux";
import searchBand from "../actions/search_band.js";
import voteBand from "../actions/vote_band.js";
import SearchForm from "./search_form.js";
import AllArtists from "./all_artists.js";
import deleteVote from "../actions/delete_vote.js";
import getVotes from "../actions/get_votes.js";

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
    // THIS IS WHAT I'M TRYING TO GET WORKING. VOTES VOTES VOTES AND SERVER

    let bandName = band.name;
    let bandImage = "";
    if (band.images.length >= 2) {
      bandImage = band.images[1].url;
    } else {
      bandImage = "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
    }

    if (this.props.votes.length <= 0) {
      this.props.dispatch(voteBand(band));
    }

    this.props.votes.forEach(thisVote => {
      var namesMatch = thisVote.name === bandName;
      var imgMatch = thisVote.bandImgMed === bandImage;
      if (namesMatch && imgMatch) {
        this.props.dispatch(deleteVote(band));
      } else {
        this.props.dispatch(voteBand(band));
      }
    });

    // if (this.props.votes.indexOf(band) > -1) {
    //   this.props.dispatch(deleteVote(band));
    // } else {
    //   this.props.dispatch(voteBand(band));
    // }
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
