import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = ({ userInfo }) => {
  const { user, isAuthenticated } = useAuth0();
  userInfo.email = user.email;
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Hi {user.given_name}</h2>
        <p id="user-email">{user.email}</p>
        <JSONPretty data={user} id="user-details" />
      </div>
    )
  );
};
export default Profile;
