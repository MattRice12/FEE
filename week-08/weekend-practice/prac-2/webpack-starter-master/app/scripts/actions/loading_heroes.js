export default function loadingHeroes() {
  return function(dispatch) {
    dispatch({ type: "LOADING_HEROES" });
  };
}
