import React from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/prouductsApi.json";
import { connect } from "react-redux";

const Cart = (props) => {
  const handleDelete = () => {};

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="row">
        {props.cartItems.map((item) => (
          <div className={"col-4"} key={item.product.id}>
            <CartItem item={item} handleAddToCart={handleDelete} />
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

export default connect(mapStateToProps)(Cart);
