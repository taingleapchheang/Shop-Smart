import "./App.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Switch, Routes, Route, Link } from "react-router-dom";
import About from "./components/views/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/ProductList";
import SearchResultPage from "./components/views/SearchResultPage";
import OfficialPage from "./components/views/OfficialPage";
import SampleData from "./components/SampleData";

const defaultChosenProduct = { title: null, image: null, price: null };

function App() {
  const [products, setProducts] = useState(SampleData);
  const [chosenProduct, setChosenProduct] = useState(defaultChosenProduct);

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

  const handleChosenProduct = (product) => {
    setChosenProduct(product);
  };

  return (
    <div className="App">
      <Header getSearchDataFromAPI={getSearchDataFromAPI} />
      {/* <main>
        <Routes>
          <Route path="/" element={<OfficialPage />} />
          <Route path="products" element={<SearchResultPage />} />
        </Routes>
      </main> */}
      <ProductList
        products={products}
        chosenProduct={chosenProduct}
        handleChosenProduct={handleChosenProduct}
      />
      <Footer />
    </div>
  );
}

export default App;
