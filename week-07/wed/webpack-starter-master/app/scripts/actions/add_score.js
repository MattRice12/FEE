export default function addScore (point) {
  return (dispatch) => {
    dispatch({ type: "ADD_SCORE", point: point });
  }
}
