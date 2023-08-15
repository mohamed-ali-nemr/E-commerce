import React from "react";
import product from "../api/prouductsApi.json";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/cart";
import { useDispatch } from "react-redux";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const id = useParams().id;
  // console.log(id);

  const pro = product.find((item) => item.id == id);
  // console.log(pro);

  const handleAddToCart = (pro) => {
    dispatch(addToCart(pro))
  };

  return (
    <article className="container post-details">
      <div className="post-details-title">
        <h2> {pro.title} </h2>
      </div>
      <img src={pro.image} alt="" className="post-details-img" />
      <p className="post-details-body">{pro.body}</p>
      <button
        className="btn btn-primary"
        onClick={() => handleAddToCart(pro)}
      >
        Add to Cart
      </button>
    </article>
  );
};

export default ProductDetails;
