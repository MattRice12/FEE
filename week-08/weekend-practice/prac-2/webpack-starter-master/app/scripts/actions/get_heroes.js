import clearHeroes from "./clear_heroes.js";
import heroesLoaded from "./heroes_loaded.js";
import loadingHeroes from "./loading_heroes.js";

export default function getHeroes() {
  return function(dispatch) {
    dispatch(clearHeroes());
    dispatch(loadingHeroes());

    $.ajax({
      type: "GET",
      url: "http://tiny-za-server.herokuapp.com/collections/mattssuperheroes2",
      dataType: "json"
    }).then(response => {
      dispatch(heroesLoaded(response));
    });
  };
}
