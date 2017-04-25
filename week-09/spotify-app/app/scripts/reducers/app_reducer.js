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
      if (allVotes.indexOf(action.band) > -1) {
        return Object.assign({}, state, { votes: allVotes });
      }
      allVotes.push(action.band);
      return Object.assign({}, state, { votes: allVotes });

    case "DELETE_VOTE":
      var allVotes = state.votes.slice();
      var bandIndex = allVotes.indexOf(action.band);
      allVotes.splice(bandIndex, 1);
      return Object.assign({}, state, { votes: allVotes });
  }

  console.log("Unhandled State!");
  return state;
}
