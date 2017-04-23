export default function searchBand() {
  return function(dispatch) {
    dispatch({ type: "SEARCHING_BANDS" });

    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist",
      dataType: "json"
    }).then(response => dispatch({ type: "DISPLAY_BANDS", data: response }));
  };
}
