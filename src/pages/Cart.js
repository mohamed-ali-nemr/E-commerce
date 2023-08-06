import React from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/prouductsApi.json";

export const ProductContext = React.createContext();

const Cart = () => {
  const handleDelete = () => {};

  return (
    <div>
      <h1>Cart</h1>
      <div className="row">
        {ProductsApi &&
          ProductsApi.map((product) => (
            <div className={"col-4"}>
              <CartItem
                key={product.id}
                product={product}
                handleAddToCart={handleDelete}
              />
            </div>
          ))}
      </div>
      <br />
      <button className="btn btn-primary btn-block">Pay order</button>
    </div>
  );
};

export default Cart;
