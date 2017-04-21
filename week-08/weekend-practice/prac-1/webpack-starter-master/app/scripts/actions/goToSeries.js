export default function goToSeries(series) {
  return function(dispatch) {
    dispatch({
      type: "CURRENT_SERIES",
      series: series
    });
  };
}
