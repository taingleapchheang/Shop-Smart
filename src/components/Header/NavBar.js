import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


const MainNav = () => (
  <Nav className="main_nav_bar">
    <Nav.Link as={RouterNavLink} to="/" exact>
      Home
    </Nav.Link>
    <Nav.Link as={RouterNavLink} to="/products" exact>
      Products
    </Nav.Link>
    <Nav.Link as={RouterNavLink} to="/categories" exact>
      Categories
    </Nav.Link>
    <Nav.Link as={RouterNavLink} to="/offers" exact>
      Offers
    </Nav.Link>
  </Nav>
);

const AccountNav = () => (
  <Nav className="account_nav_bar">
    <Nav.Link as={RouterNavLink} to="/account" exact>
      Account
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  return <Nav> {isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>;
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <MainNav />
        <AuthNav />
        <AccountNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
