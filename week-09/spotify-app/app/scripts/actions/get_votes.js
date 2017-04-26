import api from "../api.js";

export default function getVotes() {
  return function(dispatch) {
    $.ajax({
      type: "GET",
      url: api.url,
      headers: {
        "application-id": api.appId,
        "secret-key": api.skey
      }
    }).then(response => {
      console.log(response.data);
      response.data.forEach(band => {
        console.log(band);
        dispatch({ type: "VOTE_BAND", band: band });
      });
    });
  };
}
