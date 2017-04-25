import React from "react";
import ArtistBlock from "./artist_block.js";

class AllArtists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="show-all-artists">
        {this.props.bands.map((band, index) => {
          return (
            <ArtistBlock
              key={index}
              band={band}
              votes={this.props.votes}
              handleVote={() => this.props.handleVote(band)}
            />
          );
        })}
      </div>
    );
  }
}

export default AllArtists;
