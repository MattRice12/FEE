export default function voteBand(band) {
  return function(dispatch) {
    dispatch({ type: "VOTE_BAND", band: band });
  };
}
