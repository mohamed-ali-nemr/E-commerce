import React from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/prouductsApi.json";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

const Cart = (props) => {
  const cart = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const handleDeleteToCart = (index) => {
    // console.log("delete From card was clicked ");
    dispatch(removeFromCart(index));
  };
  return (
    <div>
      <h1>Cart Page</h1>
      <div className="row">
        {cart.map((item, index) => (
          <div className={"col-4"} key={item.product.id}>
            <CartItem
              handleDeleteToCart={handleDeleteToCart}
              item={item}
              index={index}
            />
          </div>
        ))}
      </div>
      <br />
      <button className="btn btn-primary btn-block">Pay order</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

export default Cart;
