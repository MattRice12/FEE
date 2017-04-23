import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import VoteBlock from "./vote_block.js";

class Votes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.votes.map((vote, index) => {
          return <VoteBlock key={index} vote={vote} />;
        })}
      </div>
    );
  }
}

export default connect(state => state)(Votes);
