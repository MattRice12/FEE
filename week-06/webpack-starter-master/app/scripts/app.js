import { createStore, applyMiddleware } from 'redux';
import logger from './logger_middleware';
import landingView from './landingView';
import menuView from './menuView';
import cartView from './cartView';
import Model from './model';

export default function app() {
  const URL = 'http://tiny-za-server.herokuapp.com/collections/mattsstuff/';

  const initialState = {
    view: landingView,
    items: []
  }

  const reducer = function (state, action) {
    if (state === undefined) {
      return initialState;
    }

    switch (action.type) {
      case 'START':
        return state;

      case 'LOGIN':
        return Object.assign({}, state, { view: menuView });

      case 'ADD_TO_CART':
        var newItem = action.item
        model.addToCart(action.item, action.price);
        var items = store.getState().items
        items.push(newItem)
        return Object.assign({}, state, { items: items } )

      case 'GET_ITEMS':
        var allItems = model.getItems();
        return Object.assign({}, state, { items: items} )

      case 'GO_TO_CART':
        return Object.assign({}, state, { view: cartView })

      default:
        return state;
    }
  }

  const store = createStore(reducer, applyMiddleware(logger));
  const model = new Model(store);

  const render = function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  }

  store.subscribe(render);
  store.dispatch({ type: 'START' })

  // $.ajax({
  //   type: 'GET',
  //   dataType: 'json',
  //   url: URL
  // }).then((data) => {
  //   data.forEach((item) => {
  //     $.ajax({
  //       type: 'DELETE',
  //       url: URL + item._id
  //     })
  //   })
  // })
}
