import boardView from '../components/board.js';
import goodbyeView from '../components/goodbye_view.js';

const initialState = {
  username: 'Matt',
  score: 0,
  view: boardView
}

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case "ADD_SCORE":
      var point = Number(action.point)
      var oldScore = state.score
      var newScore = {
        score: oldScore + point
      }
      return Object.assign({}, state, newScore)

    case "RESET_SCORE":
      return Object.assign({}, state, { score: 0 })

    case "GOODBYE_VIEW":
      return Object.assign({}, state, { view: goodbyeView })

    default:
      return state
  }

  return state;
}
