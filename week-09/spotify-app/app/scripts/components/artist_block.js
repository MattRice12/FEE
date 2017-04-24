import React from "react";
import { Button, Card, Row, Col } from "react-materialize";

class ArtistBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let voted;
    let votedText;
    if (this.props.votes.indexOf(this.props.band) >= 0) {
      voted = " voted";
      votedText = "Voted for " + this.props.band.name;
    }

    return (
      <Col l={4} m={6} s={12} className="artist-block align-left">
        <Card className="darken-1 card-card">
          <h4 tabIndex="0">{this.props.band.name}</h4>
          <div className="img-block">
            <img className="med-img" src={this.props.band.images[1].url} />
          </div>
          <button className={`btn + ${voted}`} onClick={this.props.handleVote}>
            Vote
          </button>
          <i role="alert">
            {votedText}
          </i>
        </Card>
      </Col>
    );
  }
}

export default ArtistBlock;
