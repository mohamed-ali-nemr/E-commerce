import React, { useState } from "react";
import product from "../api/prouductsApi.json";
import { addToCart } from "../store/reducers/cart";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//we add use useDispatch asper
// import { connect } from "react-redux";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const id = useParams().id;
  // console.log(id);
  const pro = product.find((item) => item.id == id);
  // console.log(pro);

  const [quantity, setquantity] = useState(1);
  const handleQuantity = (event) => {
    const value = event.target.value;
    if (value < 0) return;
    setquantity(value);
  };

  const handleAddToCart = (pro) => {
    console.log("ad to card was clicked ");
    dispatch(addToCart(pro));
    alert("We recieved your order, and we are adding product.");
  };

  return (
    <article className="container post-details">
      {/* <div className="post-details-title">
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
      <button className="btn btn-primary" onClick={() => handleAddToCart({ ...pro, qty: parseInt(quantity), total: quantity * pro.price })}>
        Add to Cart
      </button> */}
      <div class="w3-display-container" >
        <img src={pro.image} alt="" width={970}/>
        <div className="w3-padding w3-display-topmiddle w3-white">{pro.title}</div>
        <div className="w3-padding w3-display-middle w3-white">{pro.body}</div>
        <br />
        <br />
        <p>Price: {pro.price}$</p>
        <input type="number" value={quantity} onChange={handleQuantity} />
        <br />
        <br />
        <button
          className="w3-button w3-grey w3-block"
          onClick={() =>
            handleAddToCart({
              ...pro,
              qty: parseInt(quantity),
              total: quantity * pro.price,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (productInfo, quantity) =>
//       dispatch(addToCart(productInfo, quantity)),
//   };
// };

export default ProductDetails;
