import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CartItem from "./cart-item.js";
import addItem from "../actions/add_item.js";

const AllItems = ({ items, total, history, dispatch }) => {
  const onClick = id =>
    () => {
      history.push("/item/" + id);
    };

  const onAdd = item =>
    () => {
      dispatch(addItem(item));
    };

  return (
    <div>
      <div>Total: {total}</div>
      <ul className="item-ul">
        {items.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
              onClick={onClick(item.id)}
              onAdd={onAdd(item)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default connect(state => state)(AllItems);
