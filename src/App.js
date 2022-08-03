import "./App.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Routes, Route, Link } from "react-router-dom";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Products from "./components/views/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/ProductList";
import Pages from "./components/Pages";

const defaultChosenProduct = { title: null, img: null, price: null };

function App() {
  const [products, setProducts] = useState([]);
  const [chosenProduct, setChosenProduct] = useState(defaultChosenProduct);

  const getSearchDataFromAPI = (data) => {
    axios
      .get(`http://localhost:5000/${data}`)
      .then((response) => {
        console.log("Inside getSearchDataFromAPI Function");
        const products = response.data;
        console.log(products);
        setProducts(products);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  return (
    <div className="App">
      <Header getSearchDataFromAPI={getSearchDataFromAPI} />
      <main>
        <Routes>
          <Route path="/" element={<Pages />} />
          {/* <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} /> */}
        </Routes>
      </main>
      <ProductList products={products} chosenProduct={chosenProduct} />
      <Footer />
    </div>
  );
}

export default App;
