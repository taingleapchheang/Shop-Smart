import React from "react";
import Offer from "./Offer";
import { useState } from "react";

const OffersList = ({ chosenProductOffers }) => {
  const [sortOfferOption, setSortOfferOption] = useState("byLowToHigh");
  const OffersListJSXSortByLowToHigh = chosenProductOffers
    .sort((a, b) => a.price.value - b.price.value)
    .map((offer, index) => (
      <Offer
        key={index}
        price={offer["price"]["raw"]}
        condition={offer["condition"]["title"]}
        delivery={offer["delivery"]["comments"]}
        url={offer["seller"]["link"]}
      />
    ));

  const OffersListJSXSortByHighToLow = chosenProductOffers
    .sort((a, b) => b.price.value - a.price.value)
    .map((offer, index) => (
      <Offer
        key={index}
        price={offer["price"]["raw"]}
        condition={offer["condition"]["title"]}
        delivery={offer["delivery"]["comments"]}
        url={offer["seller"]["link"]}
      />
    ));
  const updateSortOfferOption = () => {
    const selectElement = document.getElementById("dropDownOptions");
    setSortOfferOption(selectElement.value);
  };
  const renderProducts = () => {
    if (sortOfferOption === "byLowToHigh") {
      return OffersListJSXSortByLowToHigh;
    } else if (sortOfferOption === "byHighToLow") {
      return OffersListJSXSortByHighToLow;
    }
  };

  return (
    <div>
      <select
        className="selector"
        id="dropDownOptions"
        onChange={updateSortOfferOption}
      >
        <option value="byLowToHigh">Sort by Price: Low to High</option>
        <option value="byHighToLow">Sort by Price: High to Low</option>
      </select>
      <h4> {chosenProductOffers.length} Offers</h4>
      <div className="offers-list">{renderProducts()}</div>
    </div>
  );
};

export default OffersList;