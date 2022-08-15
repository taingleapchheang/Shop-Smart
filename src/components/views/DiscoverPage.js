import React from "react";
import OffersList from "../OffersList";
import { useNavigate } from "react-router-dom";

const Discover = ({
  chosenProduct,
  chosenProductOffers,
  getOfferResultFromAPI,
  saveProductToWatchlist,
  userInfo,
}) => {
  const navigate = useNavigate();

  const handleProductWatch = () => {
    if (userInfo.email === null) {
      alert("You must log in to do the price watchlist");
      navigate("/account");
    } else {
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
    }
  };

  const handleProductOffers = () => {
    getOfferResultFromAPI(chosenProduct.asin);
  };
  return (
    chosenProduct.title && (
      <>
        <div class="container">
          <div class="row align-items-center">
            <h5 class="col">{chosenProduct.title}</h5>
            <button
              type="button"
              class="btn btn-success col"
              title="Solid"
              onClick={handleProductWatch}
            >
              Watch Price For This Product
            </button>
          </div>
        </div>

        <div className="chosenProduct_display">
          <img
            alt=""
            src={chosenProduct.image}
            className="chosenProduct_image"
          />
        </div>
        <h6 className="chosenProduct_price">{chosenProduct.price}</h6>
        <a href={chosenProduct.url}>Visit this product on Amazon</a>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={handleProductOffers}
        >
          Check Other Offers
        </button>
        <OffersList chosenProductOffers={chosenProductOffers} />
      </>
    )
  );
};

export default Discover;

//  (
//     chosenProduct.title && (
//       <>
//         <h5 className="chosenProduct_title">{chosenProduct.title}</h5>
//         <button
//           type="button"
//           class="btn btn-success"
//           title="Solid"
//           onClick={handleProductWatch}
//         >
//           Watch Price For This Product
//         </button>
//         <div className="chosenProduct_display">
//           <img
//             alt=""
//             src={chosenProduct.image}
//             className="chosenProduct_image"
//           />
//         </div>
//         <h6 className="chosenProduct_price">{chosenProduct.price}</h6>
//         <button
//           type="button"
//           class="btn btn-secondary"
//           onClick={handleProductOffers}
//         >
//           Check Other Offers
//         </button>
//         <OffersList chosenProductOffers={chosenProductOffers} />
//       </>
//     )
//   );
