import React from "react";

const Item = ({ item, id, onClick, onAdd, onRemove, url }) => {
  let button = "";
  if (url.path === "/all_items") {
    button = <button className="item-add" onClick={onAdd}>Add to Order</button>;
  } else if (url.path === "/cart_items") {
    button = <button className="item-add" onClick={onRemove}>Remove</button>;
  }

  return (
    <li className="item-li">
      <div className="item-name-price">
        <span onClick={onClick}>
          {item.item}
        </span>
        <span>${item.price}</span>
      </div>
      <div>
        {button}
      </div>
    </li>
  );
};

export default Item;
