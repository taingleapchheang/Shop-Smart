import React from "react";
import Profile from "../Contents/Profile";
import Background from "./Background.jpeg";
import { useAuth0 } from "@auth0/auth0-react";

const AccountPage = ({ userInfo }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <Profile userInfo={userInfo} />
      ) : (
        <img src={Background} alt="" className="background-logo" />
      )}
    </>
  );
};

export default AccountPage;
