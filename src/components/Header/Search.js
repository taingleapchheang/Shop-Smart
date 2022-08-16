import React, { useState } from "react";
import logo from "../Assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const defaultSearch = { message: "" };
const Search = (props) => {
  const [search, setSearch] = useState(defaultSearch);
  const navigate = useNavigate();

  const handleUserInput = (event) => {
    console.log("Inside handleUserInput function");
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);

    const searchData = { ...search };
    searchData[name] = value;
    setSearch(searchData);
  };

  const getSearchData = (event) => {
    event.preventDefault();
    props.getSearchDataFromAPI(search.message);
    navigate("/products");
  };
  return (
    <>
      <nav class="nav-bar navbar-light bg-light justify-content-between">
        <img src={logo} class="d-inline-block align-top img" alt="" />
        <form onSubmit={getSearchData} class="form-inline my-2 my-lg-0">
          <input
            name="message"
            type="search"
            value={search.message}
            onChange={handleUserInput}
            placeholder="search products"
            required
            class="form-control mr-sm-2 me-2"
            aria-label="Search"
            id="user-input"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Search;

{
  /* <ul class="nav nav-pills nav-fill">
<li class="nav-item">
  <img src={logo} class="d-inline-block align-top img" alt="" />
</li>
<li class="nav-item">
  <form onSubmit={getSearchData} class="form-inline my-2 my-lg-0">
    <input
      name="message"
      type="search"
      value={search.message}
      onChange={handleUserInput}
      placeholder="search products"
      required
      class="form-control mr-sm-2 me-2"
      aria-label="Search"
      id="user-input"
    />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
      Search
    </button>
  </form>
</li>
</ul> */
}
