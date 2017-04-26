import api from "../api.js";

export default function deleteVote(band) {
  return function(dispatch) {
    console.log("band", band);
    return $.ajax({
      type: "DELETE",
      url: `${api.url}/${band.objectId}`,
      headers: {
        "application-id": api.appId,
        "secret-key": api.skey
      }
    }).then(response => {
      dispatch({ type: "DELETE_VOTE", band: band });
    });
  };
}
