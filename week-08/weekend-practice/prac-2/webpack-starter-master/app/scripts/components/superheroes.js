import React from "react";
import { connect } from "react-redux";
import Hero from "./hero.js";
import addHero from "../actions/add_hero.js";
import getHeroes from "../actions/get_heroes.js";
import cacheHero from "../actions/cache_hero.js";

class Superheroes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newHero: false
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.addHero = this.addHero.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  addHero() {
    this.setState({
      newHero: !this.state.newHero
    });
  }

  formSubmit(e) {
    e.preventDefault();
    let heroName = this.refs.heroName.value;
    let heroPower = this.refs.heroPower.value;

    this.props.dispatch(addHero(heroName, heroPower));
  }

  clickHandler(hero) {
    this.props.dispatch(cacheHero(hero));
    this.props.history.push("/superheroes/" + hero._id);
  }

  render() {
    let newHeroForm = "";
    if (this.state.newHero) {
      newHeroForm = (
        <form onSubmit={this.formSubmit}>
          <label htmlFor="name">Superhero</label>
          <input ref="heroName" id="name" />
          <br />
          <label htmlFor="power">Power</label>
          <input ref="heroPower" id="power" />
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    } else {
      newHeroForm = "";
    }

    let loading = "";
    if (this.props.loading) {
      loading = <h1>Loading Superheroes...</h1>;
    }

    return (
      <div>
        <button onClick={this.addHero}>Add New Hero</button>
        {newHeroForm}
        <div className="all-heroes">
          {loading}
          {this.props.superheroes.map(hero => {
            return (
              <Hero
                key={hero._id}
                name={hero.name}
                power={hero.power}
                onClick={() => this.clickHandler(hero)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Superheroes);
