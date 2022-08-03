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
            <span className="fa-solid fa-border-all"></span>
            <Nav.Link
              as={RouterNavLink}
              to="/categories"
              exact
              className="fa fa-chevron-down"
            >
              Categories
            </Nav.Link>
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
