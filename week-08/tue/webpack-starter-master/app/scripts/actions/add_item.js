export default function addItem(item) {
  return function(dispatch) {
    dispatch({ type: "ADD_ITEM", item: item });
  };
}
