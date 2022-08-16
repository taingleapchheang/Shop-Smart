import React from "react";
import { BrowserRouter as Switch, Routes, Route, Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({
  getSearchDataFromAPI,
  searchInput,
  products,
  chosenProduct,
}) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleSelectedCategory = (e) => {
    e.preventDefault();
    const selectedCategory = e.target.textContent;
    searchInput = selectedCategory;
    console.log(`The selected option is ${searchInput}`);
    console.log("Calling Amazon API");
    getSearchDataFromAPI(searchInput);
    navigate("/products");
    console.log("Navigating to product route");
  };

  return (
    <section>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item dropdown">
            <a
              class="nav-link nav-link-color dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li
                class="dropdown-item"
                id="category-option"
                value="Fashion"
                onClick={handleSelectedCategory}
              >
                Fashion
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Electronic"
                onClick={handleSelectedCategory}
              >
                Electronic
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Cars"
                onClick={handleSelectedCategory}
              >
                Cars
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Home"
                onClick={handleSelectedCategory}
              >
                Home
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Garden"
                onClick={handleSelectedCategory}
              >
                Garden
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Gifts"
                onClick={handleSelectedCategory}
              >
                Gifts
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Music"
                onClick={handleSelectedCategory}
              >
                Music
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Health"
                onClick={handleSelectedCategory}
              >
                Health
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Beauty"
                onClick={handleSelectedCategory}
              >
                Beauty
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Pets"
                onClick={handleSelectedCategory}
              >
                Pets
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Baby Toys"
                onClick={handleSelectedCategory}
              >
                Baby Toys
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value="Books"
                onClick={handleSelectedCategory}
              >
                Books
              </li>
              <li
                class="dropdown-item"
                id="category-option"
                value=">Groceries"
                onClick={handleSelectedCategory}
              >
                Groceries
              </li>
            </ul>
          </li>
          <Nav.Link as={RouterNavLink} to="/" exact class="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={RouterNavLink} to="/products" exact class="nav-link ">
            Products
          </Nav.Link>
          <Nav.Link as={RouterNavLink} to="/discover" exact class="nav-link ">
            Discover
          </Nav.Link>
          {isAuthenticated && (
            <Nav.Link as={RouterNavLink} to="/account" exact class="nav-link">
              Account
            </Nav.Link>
          )}
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
