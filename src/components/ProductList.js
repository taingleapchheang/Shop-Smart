import React from "react";
import { useState } from "react";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.css";

const ProductList = ({
  products,
  chosenProduct,
  handleChosenProduct,
  searchInput,
}) => {
  const [sortOption, setSortOption] = useState("byLowToHigh");
  const productListJSXSortByLowToHigh = products
    .sort((a, b) => {
      if (!a?.price?.value || !b?.price?.value) {
        return 0;
      }
      return a.price.value - b.price.value;
    })
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

  const updateSortOption = (e) => {
    const selectElement = e.target.value;
    console.log(selectElement);
    setSortOption(selectElement);
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
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <h4>Search Results for "{searchInput}"</h4>
            <h5>{products.length} product results</h5>
          </div>
          <div class="col">
            <select id="dropDownOptions" onChange={updateSortOption}>
              <option value="byLowToHigh">Sort by Price: Low to High</option>
              <option value="byHighToLow">Sort by Price: High to Low</option>
            </select>
          </div>
        </div>

        <div class="row row-cols-2">{renderProducts()}</div>
      </div>
    )
  );
};

export default ProductList;
