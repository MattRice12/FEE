export default function clearHeroes() {
  return function(dispatch) {
    dispatch({ type: "CLEAR_HEROES" });
  };
}
