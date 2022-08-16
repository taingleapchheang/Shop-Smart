import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Offer = ({ price, condition, delivery, url }) => {
  return (
    <li>
      <p class="list-group-item">Condition: {condition}</p>
      <p class="list-group-item">Price: {price}</p>
      <p class="list-group-item">Expected Delivery: {delivery}</p>
      <a href={url}>Amazon Link</a>
    </li>
  );
};
export default Offer;
