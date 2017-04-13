export default function () {
  return function (dispatch) {
    dispatch({
      type: "LOGOUT"
    })
  }
}
