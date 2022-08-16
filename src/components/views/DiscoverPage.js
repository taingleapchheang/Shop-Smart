import React from "react";
import OffersList from "../Contents/OffersList";
import { useNavigate } from "react-router-dom";
import Discover from "../Contents/Discover";
import Background from "./Background.jpeg";

const DiscoverPage = ({
  chosenProduct,
  chosenProductOffers,
  getOfferResultFromAPI,
  saveProductToWatchlist,
  userInfo,
}) => {
  return (
    <>
      {chosenProduct.title ? (
        <Discover
          chosenProduct={chosenProduct}
          chosenProductOffers={chosenProductOffers}
          getOfferResultFromAPI={getOfferResultFromAPI}
          saveProductToWatchlist={saveProductToWatchlist}
          userInfo={userInfo}
        />
      ) : (
        <img src={Background} alt="" className="background-logo" />
      )}
    </>
  );
};

export default DiscoverPage;
