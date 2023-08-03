import React from "react";
import { useParams } from "react-router-dom";
import product from "../api/prouductsApi.json";

const ProductDetails = () => {
  const id = useParams();
  console.log(id);

  const pro1 = product.find((item) => item.title === "post title 1");
  console.log(pro1);
  // const pro2 = product.find((item) => item.id === id);
  // console.log(pro2);
  // const pro3 = product.find((item) => item.id === id);
  // console.log(pro3);

  return (
    <article className="container post-details">
      <div className="post-details-title">
        <h2> Product Details Page</h2>
        {/* <button className="btn btn-danger"> Delete </button> */}
      </div>
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        alt=""
        className="post-details-img"
      />
      <p className="post-details-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora fugiat
        quasi earum sapiente illum nulla? Deleniti id, nisi deserunt corporis et
        dolores ea veniam a quam quod, aliquid neque quidem amet aut nemo
        perferendis harum facere mollitia molestias sunt laudantium quia quae
        laborum magni? Impedit labore repellat commodi officia asperiores. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Tempora fugiat quasi
        earum sapiente illum nulla? Deleniti id, nisi deserunt corporis et
        dolores ea veniam a quam quod, aliquid neque quidem amet aut nemo
        perferendis harum facere mollitia molestias sunt laudantium quia quae
        laborum magni? Impedit labore repellat commodi officia asperiores.
      </p>
    </article>
  );
};

export default ProductDetails;
