import React from "react";
import ProductList from "../ProductList";

const ProductPage = ({ products, chosenProduct, handleChosenProduct, searchInput }) => {
  return (
      <div className="product-page">
        <ProductList
          products={products}
          chosenProduct={chosenProduct}
          handleChosenProduct={handleChosenProduct}
          searchInput={searchInput}
        />
      </div>
  );
};

export default ProductPage;
