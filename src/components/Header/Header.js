import React from "react";
import Head from "./Head";
import "./Header.css";
import Search from "./Search";
import NavBar from "./NavBar";

const Header = ({
  getSearchDataFromAPI,
  searchInput,
  products,
  chosenProduct,
}) => {
  return (
    <>
      <Head />
      <Search
        getSearchDataFromAPI={getSearchDataFromAPI}
        searchInput={searchInput}
      />
      <NavBar
        getSearchDataFromAPI={getSearchDataFromAPI}
        searchInput={searchInput}
        products={products}
        chosenProduct={chosenProduct}
      />
    </>
  );
};

export default Header;
