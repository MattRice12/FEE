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
        <form onSubmit={this.formSubmit} className="input-field">
          <div className="input-field">
            <input
              ref="heroName"
              id="name"
              type="text"
              placeholder="Superhero"
            />
            <br />
            <input ref="heroPower" id="power" type="text" placeholder="Power" />
            <br />
            <button className="btn deep-purple darken-4" type="submit">
              Submit
            </button>
          </div>
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
        <button className="btn" onClick={this.addHero}>
          Add New Hero
        </button>
        {newHeroForm}
        <div className="row">
          {loading}
          {this.props.superheroes.map(hero => {
            return (
              <Hero
                key={hero.id}
                name={hero.name}
                power={hero.power}
                img={hero.img}
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
