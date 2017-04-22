export default function(heroes) {
  return function(dispatch) {
    dispatch({
      type: "HEROES_LOADED",
      heroes: heroes
    });
  };
}
