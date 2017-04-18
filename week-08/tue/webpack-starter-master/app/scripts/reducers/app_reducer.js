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
      return Object.assign({}, state, { total: newTotal });
  }
  return state;
}
