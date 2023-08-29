import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

// import ProductsApi from "../api/prouductsApi.json";
//we add use useDispatch asper
// import { removeFromCart } from "../store/actions/actions";

const Cart = (props) => {
  const { products,total,totalQty } = useSelector((s) => s.cart);
  // console.log(cart);


  return (
    <div>
      <h1>Cart Page</h1>
      <div className="row">
        {
          products.map((product, index) => (
            <div className={"col-4"} key={product.id}>
              <CartItem
                // handleDeleteToCart={handleDeleteToCart}
                product={product}
                index={index}
              />
            </div>
          ))}
      </div>
      <br />
      <h3>
        Total num of prod.({totalQty}) : {total} $$
      </h3>
    </div>
  );
};

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

export default Cart;

