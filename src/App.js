import "./App.css";
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
  value: null,
  url: null,
  asin: null,
};

const defaultUserEmail = { email: null };

function App() {
  const [products, setProducts] = useState([]);
  const [chosenProductOffers, setChosenProductOffers] = useState([]);
  const [chosenProduct, setChosenProduct] = useState(defaultChosenProduct);
  const [userInfo, setUserInfo] = useState(defaultUserEmail);
  const [searchInput, setSearchInput] = useState("");
  const { isAuthenticated } = useAuth0();

  const getSearchDataFromAPI = (data) => {
    if (data) {
      axios
        .get(`https://shop-smart-backend.herokuapp.com/${data}`)
        .then((response) => {
          console.log("Inside getSearchDataFromAPI Function");
          const searchProducts = response.data;
          console.log(searchProducts);
          setProducts(searchProducts);
          setSearchInput(data);
          console.log(products);
        })
        .catch((error) => console.log(`Cannot get the data ${error}`));
    }
  };

  const getOfferResultFromAPI = (data) => {
    if (data) {
      axios
        .get(`https://shop-smart-backend.herokuapp.com/offers/${data}`)
        .then((response) => {
          console.log("Inside getOfferResultFromAPI Function");
          const offers = response.data;
          setChosenProductOffers(offers);
          console.log(offers);
        })
        .catch((error) => console.log(`Cannot get the data ${error}`));
    }
  };

  const handleChosenProduct = (product) => {
    setChosenProduct(product);
  };

  const saveProductToWatchlist = (data) => {
    if (data) {
      axios
        .post("https://shop-smart-backend.herokuapp.com/watchlist", data)
        .then((response) => {
          console.log("Successfully added the item to our watchlist");
          console.log(response);
        })
        .catch((error) => {
          console.log(`Unable to add item to watchlist ${error}`);
        });
    }
  };

  return (
    <div className="App">
      <Header
        getSearchDataFromAPI={getSearchDataFromAPI}
        searchInput={searchInput}
        products={products}
      />
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
                searchInput={searchInput}
              />
            }
          />
          <Route
            path="/discover"
            element={
              <Discover
                chosenProduct={chosenProduct}
                chosenProductOffers={chosenProductOffers}
                getOfferResultFromAPI={getOfferResultFromAPI}
                saveProductToWatchlist={saveProductToWatchlist}
                userInfo={userInfo}
              />
            }
          />
          {isAuthenticated && (
            <Route
              path="/account"
              element={<AccountPage userInfo={userInfo} />}
            />
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
