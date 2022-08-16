import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import "bootstrap/dist/css/bootstrap.css";
import "./Profile.css";

const Profile = ({ userInfo }) => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated === true) {
    userInfo.email = user.email;
  }
  return (
    <div class="profile-container">
      <h4 class="item user-name">
        <strong> Hi {user.name} !</strong>
      </h4>
      <p class="item ">
        This is a place where you can explore great deals even if it is not
        BlackFriday.
      </p>
      <p id="user-email" class="item">
        To allow us to watch the price for you, please click "Watch Price For
        This Product" Button on Discover. We will send the price update to your
        email: {user.email}
      </p>

      {/* <JSONPretty data={user} id="user-details" /> */}
    </div>
  );
};
export default Profile;
