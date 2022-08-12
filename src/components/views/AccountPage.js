import React from "react";
import { Container } from "react-bootstrap";
import Profile from "../Profile";

const AccountPage = ({userInfo}) => {
  return (
    <Container className="mb-5">
      <Profile userInfo={userInfo}/>
    </Container>
  );
};

export default AccountPage;
