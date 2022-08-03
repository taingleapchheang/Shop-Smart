import React from "react";
import Head from "./Head";
import "./Header.css";
import Search from "./Search";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <>
      <Head />
      <Search getSearchDataFromAPI={props.getSearchDataFromAPI} />
      <NavBar />
    </>
  );
};

export default Header;
