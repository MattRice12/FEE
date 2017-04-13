import loginView from '../components/login.js';
import homeView  from '../components/home.js';

const initialState = {
  username: "",
  view: loginView
}

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        username: action.username,
        view: homeView
      })

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }


  return state;
}
