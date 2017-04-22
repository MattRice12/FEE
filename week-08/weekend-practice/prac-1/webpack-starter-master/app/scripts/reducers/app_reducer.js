import bookSeries from "../models/bookSeries.js";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      bookSeries: bookSeries,
      currentSeries: null,
      currentBook: null
    };
  }

  switch (action.type) {
    case "CURRENT_SERIES":
      return Object.assign({}, state, { currentSeries: action.series });

    case "CURRENT_BOOK":
      return Object.assign({}, state, { currentBook: action.book });
  }

  console.log("Unhandled State!");
  return state;
}
