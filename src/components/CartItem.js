import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";
// import { addToCart } from "../store/actions/actions";

const CartItem = (props) => {
  // console.log("the props is " + props);
  const { item, index, newGeneralTotalAfterCHange } = props;
  const { product } = item;

  const [quantity, setquantity] = useState(0);
  const handleCartQuantity = (event) => {
    // console.log(event);
    const value = event.target.value;
    if (value < 0) return;
    setquantity(value);
  };

  const handleDeleteToCart = (index) => {
    // console.log("delete From card was clicked ");
    props.removeFromCart(index);
    // dispatch(removeFromCart(index));
  };

  const cont =
    props.total + quantity * product.price + item.quantity * product.price;

  return (
    <div className="card">
      <img src={product.image} alt="" />
      <div className="card-body">
        <h4>{product.title}</h4>
        <p className="card-text">
          Price: {product.price}$
          <br />
          Total: {item.quantity * product.price} $
          <br />
          Quantity: <input type="number" value={quantity} onChange={handleCartQuantity} />
          <br />
          New Total: {quantity * product.price} $
          <br />
          Total after Edit: {quantity * product.price + item.quantity * product.price} $
          <br />
          New General Total : {props.total + quantity * product.price + item.quantity * product.price} $
        </p>

        <button
          className="btn"
          onClick={() => newGeneralTotalAfterCHange(cont)} >
          Calculate New General Total $
        </button>

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

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
