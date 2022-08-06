import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink d_flex">
            <Nav.Link
              as={RouterNavLink}
              to="/"
              exact
              className="navlink_components"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={RouterNavLink}
              to="/products"
              exact
              className="navlink_components"
            >
              Products
            </Nav.Link>

            <Nav.Link
              as={RouterNavLink}
              to="/discover"
              exact
              className="navlink_components"
            >
              Discover
            </Nav.Link>
            <Nav.Link
              as={RouterNavLink}
              to="/offers"
              exact
              className="navlink_components"
            >
              Offers
            </Nav.Link>

            <Nav.Link
              as={RouterNavLink}
              to="/account"
              exact
              className="navlink_components"
            >
              Account
            </Nav.Link>
          </div>
          <div className="loginLogout">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
