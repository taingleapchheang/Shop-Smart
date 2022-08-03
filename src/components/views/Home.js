import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  return (
    <>
      <main>
        <h2>Search Result for </h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Home;
