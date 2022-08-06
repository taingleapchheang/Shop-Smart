import React from "react";
import "./Product.css";

const Product = ({
  productId,
  image,
  title,
  price,
  chosenProduct,
  handleChosenProduct,
}) => {
  const getChosenProduct = (event) => {
    event.preventDefault();
    const selectedProduct = {
      title: title,
      image: image,
      price: price,
      asin: productId,
    };
    handleChosenProduct(selectedProduct);
  };
  return (
    <>
      <div className="product_display">
        <img
          alt=""
          src={image}
          className="product_image"
          onClick={getChosenProduct}
        />
      </div>
      <div>
        <h4 className="product_title">{title}</h4>
      </div>
      <div>
        <h5 className="product_price">{price}</h5>
      </div>
    </>
  );
};
export default Product;
