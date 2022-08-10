import React from "react";
import OffersList from "../OffersList";

const Discover = ({
  chosenProduct,
  chosenProductOffers,
  getOfferResultFromAPI,
  saveProductToWatchlist,
  userInfo,
}) => {
  if (chosenProduct.asin) {
    getOfferResultFromAPI(chosenProduct.asin);
  }

  const handleProductWatch = () => {
    const product = {
      asin: chosenProduct.asin,
      product: chosenProduct.title,
      price: chosenProduct.value,
      url: chosenProduct.url,
      users: [userInfo.email],
    };
    saveProductToWatchlist(product);
    console.log(product);
    alert("This product has been added to our watchlist");
  };
  return (
    chosenProduct.title && (
      <>
        <h5 className="chosenProduct_title">{chosenProduct.title}</h5>
        <button title="Solid" onClick={handleProductWatch}>
          Watch Price For This Product
        </button>
        <div className="chosenProduct_display">
          <img
            alt=""
            src={chosenProduct.image}
            className="chosenProduct_image"
          />
        </div>
        <h6 className="chosenProduct_price">{chosenProduct.price}</h6>
        <OffersList chosenProductOffers={chosenProductOffers} />
      </>
    )
  );
};

export default Discover;
