import React from "react";

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="superhero" onClick={this.props.onClick}>
        <h1>{this.props.name}</h1>
        <p>Power: {this.props.power}</p>
      </div>
    );
  }
}

export default Hero;
