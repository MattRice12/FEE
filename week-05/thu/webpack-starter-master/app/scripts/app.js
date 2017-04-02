import { createStore } from 'redux';
import landingView from './landingView';
import chatView from './chatView';
import Model from './model';

export default function app() {
  const initialState = {
    view: landingView,
    user: "",
    messages: [],
    refresh: false
  };

  const appReducer = function (state, action) {
    if (state === undefined) {
      state = initialState;
    };

    switch (action.type) {
      case "LOAD":
        return state;

      case "LOGIN":
        var newUser = action.user;
        model.getEverything(newUser, chatView);
        return state;

      case "GET_MESSAGES":
        var newMessages = action.messages;
        return Object.assign({}, state, { messages: newMessages });

      case "MESSAGES_LOADED":
        var newMessages = action.messages;
        var newUser = action.user;
        var newView = action.view;
        var refresh = action.refresh;
        return Object.assign({}, state, { messages: newMessages,
                                          user: newUser,
                                          view: newView,
                                          refresh: refresh });

      case "POST_MESSAGE":
        var newMessages = state.messages.slice();
        newMessages.push(action.message);
        model.postMessages(action);
        return state;

      default:
        return state;
    };
  };

  const store = createStore(appReducer);
  const model  = new Model(store);

  const render =  function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  };
  //The store will now run our 'render' function after every event is dispatched.
  store.subscribe(render);
  store.dispatch({ type: "LOAD" });
};
