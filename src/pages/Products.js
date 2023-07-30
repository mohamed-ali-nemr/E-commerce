import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../api/prouductsApi.json";

const Products = () => {
  // let img1 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  // let img2 = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e";
  // let img3 = "https://images.unsplash.com/photo-1454165205744-3b78555e5572";

  // const [products, setproducts] = useState([
  //   {
  //     id: 1,
  //     title: "post title 1",
  //     body: "post body ...",
  //     image: img1,
  //     author: "Admin1",
  //   },
  //   {
  //     id: 2,
  //     title: "post title 2",
  //     body: "post body ...",
  //     image: img2,
  //     author: "Admin2",
  //   },
  //   {
  //     id: 3,
  //     title: "post title 3",
  //     body: "post body ...",
  //     image: img3,
  //     author: "Admin3",
  //   },
  // ]);

  const handleDetails = () => {};

  return (
    <section className="posts">
      {ProductsApi &&
        ProductsApi.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleAddToCart={handleDetails}
          />
        ))}

      {/* <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
        */}
    </section>
  );
};

export default Products;
