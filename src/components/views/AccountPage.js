import React from "react";
import { Container } from "react-bootstrap";
import Profile from "../Profile";

const AccountPage = ({ userInfo }) => {
  return (
    <Container>
      <Profile userInfo={userInfo} />
    </Container>
  );
};

export default AccountPage;
