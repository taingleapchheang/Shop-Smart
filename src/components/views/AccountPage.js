import React from "react";
import { Container } from "react-bootstrap";
import Profile from "../Profile";

const AccountPage = ({userInfo}) => {
  return (
    <Container className="mb-5">
      <h1>Profile</h1>
      <p>
        <strong>This is Account Route</strong>.
      </p>
      <Profile userInfo={userInfo}/>
    </Container>
  );
};

export default AccountPage;
