import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

const CartItem = (props) => {
  const { item, index } = props;
  const { product } = item;

  // const handleDeleteToCart = (index) => {
  //   console.log("delete From card was clicked ");
  //   props.removeFromCart(index);
  // };

  return (
    <div className="card">
      <img src={product.image} alt="" />
     
      <div className="card-body">
        <h4>{product.title}</h4>
        <h4>{product.id}</h4>
        <h5>{product.body}</h5>
        <button className="btn" onClick={() =>props.removeFromCart(index)}>
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
