import React from "react";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../api/prouductsApi.json";

//Localization
//higher order component (HOC)
import { withTranslation } from "react-i18next";

const Products = (props) => {
  const { t } = props;

  // let img1 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  // let img2 = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e";
  // let img3 = "https://images.unsplash.com/photo-1454165205744-3b78555e5572";

  // const products = [
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
  // ];

  const handleDetails = () => {
    console.log("details on products is clicked ");
  };

  return (
    <section className="posts">
      {ProductsApi &&
        ProductsApi.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleDetails={handleDetails}
          />
        ))}
    </section>
  );
};

export default withTranslation()(Products);
