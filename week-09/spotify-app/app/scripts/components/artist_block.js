import _ from "lodash";
import React from "react";
import { Button, Card, Row, Col } from "react-materialize";

class ArtistBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let voted = "blue";
    let votedText = "";
    let band = this.props.band;
    let bandImage = band.images.length >= 2
      ? band.images[1].url
      : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";

    let allIds = _.map(this.props.votes, "_id");

    if (allIds.indexOf(band.id) >= 0) {
      voted = "pink lighten-1";
      votedText = "Voted for " + band.name;
    }

    return (
      <Col l={4} m={6} s={12} className="artist-block align-left">
        <Card className="darken-1 card-card">
          <h4 tabIndex="0" className="truncate">{band.name}</h4>
          <div className="img-block">
            <img
              tabIndex="0"
              className="med-img"
              src={bandImage}
              alt={`Image of ${band.name}`}
            />
          </div>
          <button className={`btn ${voted}`} onClick={this.props.handleVote}>
            Vote
          </button>
          <i className="voted-text truncate" role="alert" tabIndex="-1">
            {votedText}
          </i>
        </Card>
      </Col>
    );
  }
}

export default ArtistBlock;
