import React from "react";
import OffersList from "./OffersList";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Discover.css";

const Discover = ({
  chosenProduct,
  chosenProductOffers,
  getOfferResultFromAPI,
  saveProductToWatchlist,
  userInfo,
}) => {
  const navigate = useNavigate();

  const handleProductWatch = () => {
    console.log("clicking watch");
    console.log(userInfo);
    if (!userInfo.email) {
      alert(
        "Please log in first. We can't do the price watch without your email"
      );
      console.log("User Email is null");
      navigate("/account");
    } else {
      const product = {
        asin: chosenProduct.asin,
        product: chosenProduct.title,
        price: chosenProduct.value,
        url: chosenProduct.url,
        users: [userInfo.email],
      };
      console.log("Adding the item to watchlist");
      saveProductToWatchlist(product);
      console.log(product);
      alert("This product has been added to our watchlist");
    }
  };

  const handleProductOffers = () => {
    getOfferResultFromAPI(chosenProduct.asin);
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <h5 class="col-9">{chosenProduct.title}</h5>
          <button
            type="button"
            class="btn btn-warning col"
            title="Solid"
            onClick={handleProductWatch}
          >
            Watch Price For This Product
          </button>
        </div>

        <div class="row align-items-center">
          <div class="col-9">
            <img
              alt=""
              src={chosenProduct.image}
              className="chosenProduct_image"
            />
          </div>
          <div class="col">
            <h6 className="chosenProduct_price">{chosenProduct.price}</h6>
            <a href={chosenProduct.url} >
              Visit this product on Amazon
            </a>
          </div>
          <div class="row align-items-center">
            <div class="col-md-auto align-items-center">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleProductOffers}
              >
                Check Other Offers
              </button>
              <OffersList chosenProductOffers={chosenProductOffers} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;

{
  /* <>
<div class="container">
  <div class="row align-items-center">
    <h5 class="col">{chosenProduct.title}</h5>
    <button
      type="button"
      class="btn btn-warning col"
      title="Solid"
      onClick={handleProductWatch}
    >
      Watch Price For This Product
    </button>
  </div>

  <div class="row align-items-center">
    <div class="col">
      <img
        alt=""
        src={chosenProduct.image}
        className="chosenProduct_image"
      />
    </div>
    <div class="col">
      <h6 className="chosenProduct_price">{chosenProduct.price}</h6>
      <a href={chosenProduct.url}>Visit this product on Amazon</a>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={handleProductOffers}
      >
        Check Other Offers
      </button>
    </div>

    <div class="col">
      <OffersList chosenProductOffers={chosenProductOffers} />
    </div>
  </div>
</div>
</> */
}
