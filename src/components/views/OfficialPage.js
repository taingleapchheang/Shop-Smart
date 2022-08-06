import React from "react";
import Home from "../MainPage/Home";
import sale3 from "../MainPage/sale3.jpg";
import "./OfficialPage.css";

const OfficialPage = () => {
  return (
    <div className="official-page">
      <Home />
      <img src={sale3} alt="" className="sale-logo"/>
    </div>
  );
};

export default OfficialPage;
