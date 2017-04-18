import React from "react";
import { connect } from "react-redux";
import Item from "./item.js";
import removeItem from "../actions/remove_item.js";

const CartItems = ({ cartItems, total, history, dispatch, match }) => {
  const onClick = id =>
    () => {
      history.push("/item/" + id);
    };

  const onRemove = item =>
    () => {
      dispatch(removeItem(item));
    };

  return (
    <div>
      <div>Total: {total}</div>
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
