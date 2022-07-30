import React from "react";
import Head from "./Head";
import "./Header.css";
import Search from "./Search";
import NavBar from "./NavBar";
import axios from "axios";

const Header = () => {
  const getSearchDataFromAPI = (data) => {
    axios
      .get(`http://localhost:5000/${data}`)
      .then((response) => {})
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };
  return (
    <>
      <Head />
      <Search getSearchDataFromAPI={getSearchDataFromAPI} />
      <NavBar />
    </>
  );
};

export default Header;
