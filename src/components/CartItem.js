import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

const CartItem = (props) => {
  const { item, index } = props;
  const { product } = item;

  const handleDeleteToCart = (index) => {
    console.log("delete From card was clicked ");
    props.removeFromCart(index);
    // dispatch(removeFromCart(index));
  };

  return (
    <div className="card">
      <img src={product.image} alt="" />

      <div className="card-body">
        <h4>{product.title}</h4>
        <p className="card-text">
          Price: {product.price}$
          <br />
          Quantity: {item.quantity}
          <br />
          Total: {item.quantity * product.price} $
        </p>

        <button className="btn" onClick={() => handleDeleteToCart(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => dispatch(removeFromCart(index)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
