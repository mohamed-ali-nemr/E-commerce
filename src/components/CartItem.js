import React from "react";

const CartItem = ({ product, handleDelete }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />

      <div className="card-body">
        <h4>{product.title}</h4>
        <h5>{product.body}</h5>
        <button className="btn">
          <i className="fa fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
