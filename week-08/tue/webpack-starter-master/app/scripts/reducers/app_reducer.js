export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      items: [
        { id: 1, item: "Golf clubs", price: 299.99 },
        { id: 2, item: "Club Soda", price: 9.99 },
        { id: 3, item: "Soda Pop", price: 5.99 },
        { id: 4, item: "Pop Rocks", price: 1.98 },
        { id: 5, item: "Rockzilla", price: 1299.99 }
      ],
      cartItems: [],
      total: 0
    };
  }

  switch (action.type) {
    case "ADD_ITEM":
      var total = state.total;
      var newTotal = total + action.item.price;
      var myItems = state.cartItems.slice();
      myItems.push(action.item);
      return Object.assign({}, state, {
        cartItems: myItems,
        total: newTotal
      });

    case "REMOVE_ITEM":
      var total = state.total;
      var newTotal = total - action.item.price;
      var myItems = state.cartItems.slice();
      var deletedItem = myItems.indexOf(action.item);
      myItems.splice(deletedItem, 1);
      return Object.assign({}, state, { cartItems: myItems, total: newTotal });
  }
  return state;
}
