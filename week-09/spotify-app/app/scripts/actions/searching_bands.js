export default function searchingBands() {
  return function(dispatch) {
    dispatch({ type: "SEARCHING_BANDS" });
  };
}
