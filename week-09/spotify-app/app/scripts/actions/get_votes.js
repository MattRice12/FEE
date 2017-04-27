import api from "../api.js";
import voteBand from "./vote_band.js";

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
      response.data.forEach(band => {
        dispatch(voteBand(band));
      });
    });
  };
}
