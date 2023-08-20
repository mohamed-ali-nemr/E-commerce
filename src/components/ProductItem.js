import { Link } from "react-router-dom";

const ProductItem = ({ product, handleDetails }) => {
  return (
    <Link to={`/details/${product.id}`} className="post">
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p className="card-text">Price: {product.price}$</p>
      <button className="btn" onClick={handleDetails}>
        Details
      </button>
    </Link>
  );
};

export default ProductItem;
