import React from "react";
import { useParams } from "react-router-dom";
import product from "../api/prouductsApi.json";

const ProductDetails = () => {
  const id = useParams().id;
  console.log(id);

  const pro = product.find((item) => item.id == id);
  console.log(pro);

  const addToCart = () => {};

  return (
    <article className="container post-details">
      <div className="post-details-title">
        <h2> {pro.title} </h2>
      </div>
      <img src={pro.image} alt="" className="post-details-img" />
      <p className="post-details-body">{pro.body}</p>
      <button className="btn btn-primary" onClick={addToCart}>
        Add to Cart
      </button>
    </article>
  );
};

export default ProductDetails;
