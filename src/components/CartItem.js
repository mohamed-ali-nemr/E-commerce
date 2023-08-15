import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

const CartItem = ({...props}) => {
  const { product, index, handleDeleteToCart } = props;

  return (
    <div className="card">
      <img src={product.image} alt="" />

      <div className="card-body">
        <h4>{product.title}</h4>
        <h4>{product.id}</h4>
        <h5>{product.body}</h5>
        <button className="btn" onClick={() => handleDeleteToCart(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};


export default CartItem;
