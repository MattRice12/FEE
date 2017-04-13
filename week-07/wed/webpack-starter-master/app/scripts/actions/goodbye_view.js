export default function goodbyeView () {
  return (dispatch) => {
    dispatch({ type: "GOODBYE_VIEW" })
  }
}
