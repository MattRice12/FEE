export default function removeItem(item) {
  return function(dispatch) {
    dispatch({ type: "REMOVE_ITEM", item: item });
  };
}
