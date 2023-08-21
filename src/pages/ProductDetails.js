import React, { useState } from "react";
import product from "../api/prouductsApi.json";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/actions/actions";
import { connect } from "react-redux";

const ProductDetails = (props) => {
  const id = useParams().id;
  // console.log(id);
  const pro = product.find((item) => item.id == id);
  // console.log(pro);

  const [quantity, setquantity] = useState(0);
  const handleQuantity = (event) => {
    // console.log(event);
    const value = event.target.value;
    if (value < 0) return;
    setquantity(value);
  };

  const handleAddToCart = (pro) => {
    console.log("ad to card was clicked ");
    props.addToCart(pro, quantity);
  };

  return (
    <article className="container post-details">
      <div className="post-details-title">
        <h2> {pro.title} </h2>
      </div>
      <img src={pro.image} alt="" className="post-details-img" />
      <br />
      <br />
      <p>Price: {pro.price}$</p>
      <p className="post-details-body">{pro.body}</p>

      <input type="number" value={quantity} onChange={handleQuantity} />
      <br />
      <br />
      <p>Total: {quantity * pro.price} $</p>
      <button className="btn btn-primary" onClick={() => handleAddToCart(pro)}>
        Add to Cart
      </button>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) =>
      dispatch(addToCart(productInfo, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
