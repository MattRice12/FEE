import React from "react";

class VoteBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vote-block">
        <img src={this.props.vote.images[2].url} />
        <h5>{this.props.vote.name}</h5>
      </div>
    );
  }
}

export default VoteBlock;
