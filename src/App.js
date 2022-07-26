import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Switch, Routes, Route, Link } from "react-router-dom";
import Home from "./components/views/Home";
import About from "./components/views/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
