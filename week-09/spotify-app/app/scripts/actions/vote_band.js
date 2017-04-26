import api from "../api.js";

export default function voteBand(band) {
  return function(dispatch) {
    console.log(band);

    let bandImgMed = "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
    if (band.images.length > 1) {
      bandImgMed = band.images[1].url;
    }

    return $.ajax({
      type: "POST",
      url: api.url,
      headers: {
        "application-id": api.appId,
        "secret-key": api.skey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        _id: band.id,
        name: band.name,
        bandImgMed: bandImgMed
      })
    }).then(response => {
      console.log(response);
      dispatch({ type: "VOTE_BAND", band: response });
    });
  };
}
