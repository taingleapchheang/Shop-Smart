import React from "react";
import { useState } from "react";
import Product from "./Product";

const ProductList = ({
  products,
  chosenProduct,
  handleChosenProduct,
  searchInput,
}) => {
  const [sortOption, setSortOption] = useState("byLowToHigh");
  const productListJSXSortByLowToHigh = products
    .sort((a, b) => a.price.value - b.price.value)
    .map((product, index) => (
      <Product
        key={index}
        productId={product["asin"]}
        image={product["image"]}
        title={product["title"]}
        value={product["price"]["value"]}
        price={product["price"]["raw"]}
        url={product["link"]}
        chosenProduct={chosenProduct}
        handleChosenProduct={handleChosenProduct}
      />
    ));

  const productListJSXSortByHighToLow = products
    .sort((a, b) => b.price.value - a.price.value)
    .map((product, index) => (
      <Product
        key={index}
        productId={product["asin"]}
        image={product["image"]}
        title={product["title"]}
        value={product["price"]["value"]}
        price={product["price"]["raw"]}
        url={product["link"]}
        chosenProduct={chosenProduct}
        handleChosenProduct={handleChosenProduct}
      />
    ));

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

  return (
    products.length !== 0 && (
      <div>
        <select
          className="selector"
          id="dropDownOptions"
          onChange={updateSortOption}
        >
          <option value="byLowToHigh">Sort by Price: Low to High</option>
          <option value="byHighToLow">Sort by Price: High to Low</option>
        </select>
        <h4>Search Results for {searchInput}</h4>
        <h5>{products.length} product results</h5>
        <div className="cards-list">{renderProducts()}</div>
      </div>
    )
  );
};

export default ProductList;
