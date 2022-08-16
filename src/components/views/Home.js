import React from "react";
import Background from "./Background.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="official-page">
      <img src={Background} alt="" className="background-logo" />
    </div>
  );
};

export default Home;
