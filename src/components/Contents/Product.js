import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Product = ({
  productId,
  image,
  title,
  value,
  price,
  url,
  chosenProduct,
  handleChosenProduct,
}) => {
  const navigate = useNavigate();

  const getChosenProduct = (event) => {
    event.preventDefault();
    const selectedProduct = {
      title: title,
      image: image,
      price: price,
      value: value,
      url: url,
      asin: productId,
    };
    handleChosenProduct(selectedProduct);
    navigate("/discover");
  };
  return (
    <>
      <div class="card">
        <img alt="" src={image} class="card-img-top" />
      </div>
      <div>
        <h4 class="card-title">{title}</h4>
        <h5 class="card-text">{price}</h5>
        <button
          button
          type="button"
          class="btn btn-success"
          onClick={getChosenProduct}
        >
          Discover this product
        </button>
      </div>
    </>
  );
};
export default Product;
