import React from "react";
import OffersList from "../OffersList";
import SelectedProduct from "../SelectedProduct";

const Discover = ({
  chosenProduct,
  chosenProductOffers,
  getOfferResultFromAPI,
}) => {
  if (chosenProduct.asin) {
    getOfferResultFromAPI(chosenProduct.asin);
  }
  return (
    <>
      <h4> Inside DiscoverPage</h4>
      <div>{chosenProduct.title && <SelectedProduct />}</div>
      <h5 className="chosenProduct_title">{chosenProduct.title}</h5>
      <div className="chosenProduct_display">
        <img alt="" src={chosenProduct.image} className="chosenProduct_image" />
      </div>
      <h6 className="chosenProduct_price">{chosenProduct.price}</h6>
      <OffersList chosenProductOffers={chosenProductOffers} />
    </>
  );
};

export default Discover;
