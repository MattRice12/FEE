import React from "react";

class ArtistBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let voted;
    if (this.props.votes.indexOf(this.props.band) >= 0) {
      voted = " voted";
    }

    return (
      <div className="artist-block">
        <img src={this.props.band.images[1].url} />
        <h3>{this.props.band.name}</h3>
        <button className={voted} onClick={this.props.handleVote}>
          Vote
        </button>
        <i>{voted}</i>
      </div>
    );
  }
}

export default ArtistBlock;
