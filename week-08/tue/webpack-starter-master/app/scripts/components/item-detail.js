import React from "react";
import { connect } from "react-redux";

const ItemDetail = ({ items, match }) => {
  let currentItem = items.filter(item => {
    return String(item.id) == match.params.id;
  })[0];

  return (
    <div>
      <h1> {currentItem.item} </h1>
      <h3> ${currentItem.price} </h3>
    </div>
  );
};

export default connect(state => state)(ItemDetail);
