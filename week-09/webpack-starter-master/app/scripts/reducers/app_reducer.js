export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      bands: [],
      searching: false,
      votes: []
    };
  }

  switch (action.type) {
    case "SEARCHING_BANDS":
      return Object.assign({}, state, { searching: true });

    case "DISPLAY_BANDS":
      return Object.assign({}, state, {
        searching: false,
        bands: action.data.artists.items
      });

    case "VOTE_BAND":
      var allVotes = state.votes.slice();
      allVotes.push(action.band);
      return Object.assign({}, state, { votes: allVotes });
  }

  console.log("Unhandled State!");
  return state;
}
