const Post = ({ post, handleAddToCart }) => {
  return (
    <div className="post">
      <img src={post.image} alt="" />
      <div className="post-author">By: {post.author}</div>
      <h3>{post.title}</h3>
      <button className="btn" onClick={() => handleAddToCart(post.id)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Post;
