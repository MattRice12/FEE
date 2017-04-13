export default function (username) {
  return function (dispatch) {
    dispatch({
      type: "LOGIN",
      username: username
    })
  }
}
