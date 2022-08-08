import "./App.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OfficialPage from "./components/views/OfficialPage";
import ProductPage from "./components/views/ProductPage";
import AccountPage from "./components/views/AccountPage";
import Discover from "./components/views/DiscoverPage";
import SampleData from "./components/SampleData";
import SampleOfferData from "./components/SampleOfferData";

const defaultChosenProduct = {
  title: null,
  image: null,
  price: null,
  asin: null,
};

function App() {
  const [products, setProducts] = useState(SampleData);
  const [chosenProduct, setChosenProduct] = useState(defaultChosenProduct);
  const [chosenProductOffers, setChosenProductOffers] =
    useState(SampleOfferData);

  const [userInfo, setUserInfo] = useState({});

  const getSearchDataFromAPI = (data) => {
    // axios
    //   .get(`http://localhost:5000/${data}`)
    //   .then((response) => {
    //     console.log("Inside getSearchDataFromAPI Function");
    //     const newProducts = response.data;
    //     console.log(data);
    //     setProducts(newProducts);
    //     console.log(newProducts);
    //   })
    //   .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  const getOfferResultFromAPI = (data) => {
    // axios
    //   .get(`http://localhost:5000/offers/${data}`)
    //   .then((response) => {
    //     console.log("Inside getOfferResultFromAPI Function");
    //     const offers = response.data;
    //     console.log(data);
    //     setChosenProductOffer(offers);
    //     console.log(offers);
    //   })
    //   .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  const handleChosenProduct = (product) => {
    setChosenProduct(product);
  };

  const saveProductToWatchlist = () => {};

  return (
    <div className="App">
      <Header getSearchDataFromAPI={getSearchDataFromAPI} />
      <main>
        <Routes>
          <Route path="/" element={<OfficialPage />} />
          <Route
            path="/products"
            element={
              <ProductPage
                products={products}
                chosenProduct={chosenProduct}
                handleChosenProduct={handleChosenProduct}
              />
            }
          />
          <Route
            path="/discover"
            element={
              <Discover
                chosenProduct={chosenProduct}
                chosenProductOffers={chosenProductOffers}
                getOfferResultFromAPI={getOfferResultFromAPI} saveProductToWatchlist={saveProductToWatchlist}
              />
            }
          />
          <Route
            path="/account"
            element={<AccountPage userInfo={userInfo} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
