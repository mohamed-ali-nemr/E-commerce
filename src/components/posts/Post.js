import { Link } from "react-router-dom";


const Post = ({ post, handleAddToCart }) => {
  return (
    <Link to={`/details/${post.id}`} className="post">
      <img src={post.image} alt="" />
      <div className="post-author">By: {post.author}</div>
      <h3>{post.title}</h3>
      <button className="btn" onClick={() => handleAddToCart(post.id)}>
        Add To Cart
      </button>
    </Link> 
  );
};

export default Post;
