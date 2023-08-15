import React from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/prouductsApi.json";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cart";

const Cart = (props) => {
  const {products} = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  console.log(products);

  const handleDeleteToCart = (index) => {
    // console.log("delete From card was clicked ");
    dispatch(removeFromCart(index));
  };
  return (
    <div>
      <h1>Cart Page</h1>
      <div className="row">
        {products && products.map((product, index) => (
          <div className={"col-4"} key={product.id}>
            <CartItem
              handleDeleteToCart={handleDeleteToCart}
              product={product}
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
