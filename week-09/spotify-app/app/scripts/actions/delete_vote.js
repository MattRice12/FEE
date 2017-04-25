export default function deleteVote(band) {
  return function(dispatch) {
    dispatch({ type: "DELETE_VOTE", band: band });
  };
}
