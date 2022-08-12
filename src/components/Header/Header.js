import React from "react";
import Head from "./Head";
import "./Header.css";
import Search from "./Search";
import NavBar from "./NavBar";

const Header = ({ getSearchDataFromAPI, searchInput }) => {
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
      />
    </>
  );
};

export default Header;
