export default function displayBands(response) {
  return function(dispatch) {
    dispatch({
      type: "DISPLAY_BANDS",
      data: response
    });
  };
}
