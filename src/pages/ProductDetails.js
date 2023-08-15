import React from "react";
import product from "../api/prouductsApi.json";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/actions/actions";
import { connect } from "react-redux";

const ProductDetails = (props) => {
  const id = useParams().id;
  // console.log(id);

  const pro = product.find((item) => item.id == id);
  // console.log(pro);

  const handleAddToCart = (pro) => {
    console.log("ad to card was clicked ");
    props.addToCart(pro);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo) => dispatch(addToCart(productInfo)),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
