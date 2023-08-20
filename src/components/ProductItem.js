import { Link } from "react-router-dom";

const ProductItem = ({ product, handleDetails }) => {
  return (
    <div  className="post">
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p className="card-text">Price: {product.price}$</p>
      <Link to={`/details/${product.id}`} className="btn" onClick={handleDetails}>
        Details
      </Link>
    </div>
  );
};

export default ProductItem;
