import superheroes from "../models/heroes.js";
import addHero from "../actions/add_hero.js";
import getHeroes from "../actions/get_heroes.js";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      superheroes: superheroes,
      loading: false,
      currentHero: {},
      prevHero: {},
      nextHero: {}
    };
  }

  switch (action.type) {
    case "ADD_HERO":
      var allHeroes = state.superheroes.slice();
      var newHero = {
        id: action.id,
        name: action.name,
        power: action.power
      };
      allHeroes.push(newHero);
      return Object.assign({}, state, { superheroes: allHeroes });

    case "LOADING_HEROES":
      return Object.assign({}, state, { loading: true });

    case "HEROES_LOADED":
      return Object.assign({}, state, {
        loading: false,
        superheroes: action.heroes
      });

    case "CLEAR_HEROES":
      return Object.assign({}, state, { superheroes: [] });

    case "CACHE_HERO":
      var heroIndex = state.superheroes.indexOf(action.hero);
      var prevHeroIndex = heroIndex <= 0
        ? state.superheroes.length - 1
        : heroIndex - 1;

      var nextHeroIndex = heroIndex >= state.superheroes.length - 1
        ? 0
        : heroIndex + 1;

      var prevHero = state.superheroes[prevHeroIndex];
      var nextHero = state.superheroes[nextHeroIndex];

      return Object.assign({}, state, {
        currentHero: action.hero,
        prevHero: prevHero,
        nextHero: nextHero
      });
  }

  console.log("Unhandled State!");
  return state;
}
