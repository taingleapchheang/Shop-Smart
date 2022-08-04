import React from "react";
import Categories from "./Categories";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
        </div>
      </section>
    </>
  );
};

export default Home;
