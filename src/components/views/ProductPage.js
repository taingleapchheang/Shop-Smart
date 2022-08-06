import React from "react";
import ProductList from "../ProductList";

const ProductPage = ({ products, chosenProduct, handleChosenProduct }) => {
  return (
    <div className="product-page">
      <h4> Inside ProductPage</h4>
      <ProductList
        products={products}
        chosenProduct={chosenProduct}
        handleChosenProduct={handleChosenProduct}
      />
    </div>
  );
};

export default ProductPage;
