import React from "react";
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
