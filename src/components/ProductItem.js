import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart} from '../store/cart'



const ProductItem = ({ product, handleDetails }) => {

  const dispatch=useDispatch();
  return (
    <div className="post">
      <img src={product.image} alt="" />
      <div className="post-author">By: {product.author}</div>
      <h3>{product.title}</h3>
      <button className="btn mr-1 btn-secondary" onClick={()=>dispatch(addToCart(product))}>
        Add to cart
      </button>
      <button className="btn" onClick={handleDetails}>
        Details
      </button>
    </div>
  );
};

export default ProductItem;
