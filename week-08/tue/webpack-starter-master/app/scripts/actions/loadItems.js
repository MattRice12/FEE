export default function loadItems() {
  return function(dispatch) {
    return $.ajax({
      type: "GET",
      url: "http://tiny-za-server.herokuapp.com/collections/mattscart",
      dataType: "json"
    }).then(response => {
      console.log(response);
      dispatch({ type: "LOAD_ITEMS", items: response });
    });
  };
}
