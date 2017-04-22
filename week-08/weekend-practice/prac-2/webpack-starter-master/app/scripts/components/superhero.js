import React from "react";
import { connect } from "react-redux";
import cacheHero from "../actions/cache_hero.js";

class Superhero extends React.Component {
  constructor(props) {
    super(props);

    this.nextHero = this.nextHero.bind(this);
    this.prevHero = this.prevHero.bind(this);
  }

  nextHero() {
    let nextParams = this.props.nextHero._id;
    this.props.history.push("/superheroes/" + nextParams);
    this.props.dispatch(cacheHero(this.props.nextHero));
  }

  prevHero() {
    let prevParams = this.props.prevHero._id;
    this.props.history.push("/superheroes/" + prevParams);
    this.props.dispatch(cacheHero(this.props.prevHero));
  }

  render() {
    let currentHero = this.props.superheroes.filter(hero => {
      return hero._id === this.props.match.params.id;
    })[0];

    return (
      <div>
        <h1>{this.props.currentHero.name}</h1>
        <p>{this.props.currentHero.power}</p>
        <button onClick={this.prevHero}>Previous</button>
        <button onClick={this.nextHero}>Next</button>
      </div>
    );
  }
}

export default connect(state => state)(Superhero);
