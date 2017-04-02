import { createStore } from 'redux';

export default function app () {
  const initialState = {
    items: []
  };

  // reducer / update function
  const appReducer = function (state, action) {
    if (state === undefined) {
      state = initialState;
    };

    switch (action.type) {
      case "TESTING":
        console.log("It works!");
        console.log(state);
        return state;

      case "ADD_ITEM":
        var newItems = state.items.slice(); // Makes a copy of items array
        newItems.push(action.item);
        return Object.assign({}, state, { items: newItems }); // Makes a copy of the state before returning it

      case "REMOVE_ITEM":
        var newItems = state.items.slice();
        newItems.splice( action.index, 1 );
        return Object.assign({}, state, { items: newItems })

      default:
        return state;
    }
  };

  const store = createStore(appReducer);

  store.dispatch({ type: "TESTING" });

  $('button').on('click', function() {
    store.dispatch({ type: "ADD_ITEM", item: 'apples'});
  })

  store.dispatch({ type: "ADD_ITEM", item: 'oranges'});
  store.dispatch({ type: "LOGIN", name: elem.val() });
  store.dispatch({ type: "REMOVE_ITEM", index: 1 });
  store.dispatch({ type: "TESTING" });

};
