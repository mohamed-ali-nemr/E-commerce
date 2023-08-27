import React from "react";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../api/prouductsApi.json";

//Localization
//higher order component (HOC)
import { withTranslation } from "react-i18next";

const Products = () => {


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
