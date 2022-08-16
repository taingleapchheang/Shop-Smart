import React from "react";
import ProductList from "../Contents/ProductList";
import Background from "./Background.jpeg";

const ProductPage = ({
  products,
  chosenProduct,
  handleChosenProduct,
  searchInput,
}) => {
  return (
    <div className="product-page">
      {products.length ? (
        <ProductList
          products={products}
          chosenProduct={chosenProduct}
          handleChosenProduct={handleChosenProduct}
          searchInput={searchInput}
        />
      ) : (
        <img src={Background} alt="" className="background-logo" />
      )}
    </div>
  );
};

export default ProductPage;
