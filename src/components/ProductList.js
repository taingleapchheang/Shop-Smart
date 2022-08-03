import React from "react";
import { useState } from "react";

const ProductList = ({ products, chosenProduct }) => {
  const [sortOption, setSortOption] = useState("byLowToHigh");

  const updateSortOption = () => {
    const selectElement = document.getElementById("dropDownOptions");
    setSortOption(selectElement.value);
  };
  const renderProducts = () => {
    if (sortOption === "byLowToHigh") {
      return productListJSXSortByLowToHigh;
    } else if (sortOption === "byHighToLow") {
      return productListJSXSortByHighToLow;
    }
  };

  const productListJSXSortByLowToHigh = products
    .sort((a, b) => b.price - a.price)
    .map((product) => (
      <product
        key={product.asin}
        productId={product.asin}
        title={product.details}
        image={product.url}
        price={product.price}
        chosenProduct={chosenProduct}
      />
    ));

  const productListJSXSortByHighToLow = products
    .sort((a, b) => a.price - b.price)
    .map((product) => (
      <product
        key={product.asin}
        productId={product.asin}
        title={product.details}
        image={product.url}
        price={product.price}
        chosenProduct={chosenProduct}
      />
    ));

  return (
    <div>
      <select
        className="selector"
        id="dropDownOptions"
        onChange={updateSortOption}
      >
        <option value="byLowToHigh">Sort by Price: Low to High</option>
        <option value="byHighToLow">Sort by Price: High to Low</option>
      </select>
      <div className="cards-list">{renderProducts()}</div>
    </div>
  );
};

export default ProductList;
