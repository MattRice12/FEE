import React from "react";

const CartItem = ({ item, id, onClick, onAdd }) => {
  return (
    <li className="item-li">
      <div className="item-name-price">
        <span onClick={onClick}>
          {item.item}
        </span>
        <span>${item.price}</span>
      </div>
      <div>
        <button className="item-add" onClick={onAdd}>Add to Order</button>
      </div>
    </li>
  );
};

export default CartItem;
