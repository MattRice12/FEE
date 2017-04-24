import React from "react";
import { Button, Card, Row, Col } from "react-materialize";

class VoteBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col l={4} m={6} s={12} className="vote-block">
        <Card className="darken-1 card-card">
          <div className="img-block">
            <img className="small-img" src={this.props.vote.images[2].url} />
          </div>
          <h5>{this.props.vote.name}</h5>
        </Card>
      </Col>
    );
  }
}

export default VoteBlock;
