import React from "react";
import Profile from "../Contents/Profile";

const AccountPage = ({ userInfo }) => {
  return (
    <>
      <Profile userInfo={userInfo}/>
    </>
  );
};

export default AccountPage;
