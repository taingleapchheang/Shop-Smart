import "./App.css";
import NavBar from "./components/Header/NavBar";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Routes, Route, Link } from "react-router-dom";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
