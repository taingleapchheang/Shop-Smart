/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({ getSearchDataFromAPI, searchInput }) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleSelectedCategory = (e) => {
    const selectedCategory = document
      .getElementById("category-option")
      .getAttribute("value");
    searchInput = selectedCategory;
    console.log(`The selected option is ${searchInput}`);
    console.log(typeof searchInput);
    console.log("Calling Amazon API");
    // getSearchDataFromAPI(searchInput);
    // navigate("/products");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
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
                value="Home & Garden"
                onClick={handleSelectedCategory}
              >
                Home & Garden
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
                value="Health & Beauty"
                onClick={handleSelectedCategory}
              >
                Health & Beauty
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
          <Nav.Link as={RouterNavLink} to="/products" exact class="nav-link">
            Products
          </Nav.Link>
          <Nav.Link as={RouterNavLink} to="/discover" exact class="nav-link">
            Discover
          </Nav.Link>{" "}
          {isAuthenticated && (
            <Nav.Link as={RouterNavLink} to="/account" exact class="nav-link">
              Account
            </Nav.Link>
          )}
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
    </nav>

    // <>
    //   <header className="header">
    //     <div className="container d_flex">
    //       <div className="catgrories d_flex">
    //         <span class="fa-solid fa-border-all"></span>
    //         <h4>
    //           Categories <i className="fa fa-chevron-down"></i>
    //         </h4>
    //       </div>

    //       <div className="navlink d_flex">
    //         <Nav.Link
    //           as={RouterNavLink}
    //           to="/"
    //           exact
    //           className="navlink_components"
    //         >
    //           Home
    //         </Nav.Link>

    //         <Nav.Link
    //           as={RouterNavLink}
    //           to="/products"
    //           exact
    //           className="navlink_components"
    //         >
    //           Products
    //         </Nav.Link>

    //         <Nav.Link
    //           as={RouterNavLink}
    //           to="/discover"
    //           exact
    //           className="navlink_components"
    //         >
    //           Discover
    //         </Nav.Link>
    //         <Nav.Link
    //           as={RouterNavLink}
    //           to="/account"
    //           exact
    //           className="navlink_components"
    //         >
    //           Account
    //         </Nav.Link>
    //         <Nav.Link
    //           as={RouterNavLink}
    //           to="/about"
    //           exact
    //           className="navlink_components"
    //         >
    //           About
    //         </Nav.Link>
    //       </div>
    //       <div className="loginLogout">
    //         {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    //       </div>
    //     </div>
    //   </header>
    // </>
  );
};

export default NavBar;
