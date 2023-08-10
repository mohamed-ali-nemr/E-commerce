import { Link } from "react-router-dom";



const ProductItem = ({ product, handleDetails }) => {
  return (
    <Link to={`/details/${product.id}`} className="post">
      <img src={product.image} alt="" />
      <div className="post-author">By: {product.author}</div>
      <h3>{product.title}</h3>
      <button className="btn" onClick={handleDetails}>
        Details
      </button>
    </Link>
  );
};

export default ProductItem;
