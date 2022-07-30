import React, { useState } from "react";

const defaultSearch = { message: "" };
const Search = (props) => {
  const [search, setSearch] = useState(defaultSearch);

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
  };
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>
          <div>
            <form onSubmit={getSearchData} className="search-form">
              <input
                name="message"
                type="text"
                value={search.message}
                onChange={handleUserInput}
                placeholder="search products"
                required
                className="input"
              />
              <input type="submit" value="🔍" className="icon_search" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
