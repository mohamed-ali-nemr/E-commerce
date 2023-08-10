import React from "react";

const CartItem = (props, { handleDelete }) => {
  const { item, index } = props;
  const { product } = item;
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
