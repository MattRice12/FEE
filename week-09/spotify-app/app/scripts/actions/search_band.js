import searchingBands from "./searching_bands.js";
import displayBands from "./display_bands.js";

export default function searchBand(term) {
  return function(dispatch) {
    dispatch(searchingBands());

    $.ajax({
      type: "GET",
      url: `https://api.spotify.com/v1/search?q=${term}&type=artist`,
      dataType: "json"
    }).then(response => dispatch(displayBands(response)));
  };
}
