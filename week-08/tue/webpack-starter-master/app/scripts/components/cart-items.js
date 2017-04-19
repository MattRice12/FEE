import React from "react";
import { connect } from "react-redux";
import Item from "./item.js";
import removeItem from "../actions/remove_item.js";
import saveCart from "../actions/save_cart.js";
import loadItems from "../actions/loadItems.js";

const CartItems = ({ cartItems, total, history, dispatch, match }) => {
  const onClick = id =>
    () => {
      history.push("/item/" + id);
    };

  const onRemove = item =>
    () => {
      dispatch(removeItem(item));
    };

  const save = () => {
    saveCart(cartItems);
  };

  const load = () => {
    dispatch(loadItems());
  };

  return (
    <div>
      <div>Total: {total}</div>
      <button onClick={load}>Load Items</button>

      <button onClick={save}>Save Cart</button>
      <ul className="item-ul">
        {cartItems.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              onClick={onClick(item.id)}
              onRemove={onRemove(item)}
              url={match}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default connect(state => state)(CartItems);
