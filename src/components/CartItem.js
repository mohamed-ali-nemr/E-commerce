import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, setQuantity } from "../store/reducers/cart";


//we add use useDispatch asper 
// import { connect } from "react-redux";
// import { addToCart } from "../store/actions/actions";

const CartItem = ({ ...props }) => {
  const { product, index} = props;
  // console.log(product)

  const dispatch = useDispatch();



  const handleCartQuantity = (event, id) => {
    // console.log(event);
    const value = event.target.value;
    if (value < 0) return;
    dispatch(setQuantity({ id: index, qty: value }));
  };


  const handleDeleteToCart = (index) => {
    // console.log("delete From card was clicked ");
    dispatch(removeFromCart(index));
    alert('We deleted your order sucessfully');

  };




  return (
    <div className="card">
      <img src={product.image} alt="" />
      <div className="card-body">
        <h4>{product.title}</h4>
        <p className="card-text">
          Price: {product.price}$
          <br />
          Total: {product.total} $
          <br />
          Quantity: <input type="number" value={product.qty} onChange={(e) => {
            console.log("event triggered")
            handleCartQuantity(e, product.id)
          }} />
          <br />
        </p>

        <button className="btn" onClick={() => handleDeleteToCart(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (index) => dispatch(removeFromCart(index)),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart,
//     total: state.cart.reduce(
//       (total, item) => total + item.quantity * item.product.price,
//       0
//     ),
//     totalQuantity: state.cart.reduce(
//       (total, item) => total + parseInt(item.quantity), 0),
//   };
// };

export default CartItem;
