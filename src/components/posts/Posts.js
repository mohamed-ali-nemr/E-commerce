import Post from "./post";

const Posts = () => {
  return (
    <section className="posts">
     
     {/* <Post />
     <Post />
     <Post /> */}
     
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt=""
        />
        <div className="post-author">By: Nmr </div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <button className="btn">Add to cart</button>
      </div>
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt=""
        />
        <div className="post-author">By: Nmr </div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <button className="btn">Add to cart</button>
      </div>
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt=""
        />
        <div className="post-author">By: Nmr </div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <button className="btn">Add to cart</button>
      </div>
    </section>
  );
};

export default Posts;
