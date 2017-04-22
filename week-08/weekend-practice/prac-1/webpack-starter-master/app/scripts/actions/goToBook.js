export default function goToSeries(book) {
  return function(dispatch) {
    dispatch({
      type: "CURRENT_BOOK",
      book: book
    });
  };
}
