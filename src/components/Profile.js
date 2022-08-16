import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Profile = ({ userInfo }) => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated === true) {
    navigate("/account");
  }
  userInfo.email = user.email;
  return (
    isAuthenticated && (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="img_avatar.png"
              alt="Avatar"
              style="width:300px;height:300px;"
            />
          </div>
          <div class="flip-card-back">
            <h1>Hi {user.given_name}</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    )
  );
};
export default Profile;

// isAuthenticated && (
//   <div>
//     <h2>
//       <strong> Hi {user.given_name} </strong>
//     </h2>
//     <h3> Welcome to ShopSmart Website !</h3>
//     <p>
//       A place where you can explore great deals even if it is not
//       BlackFriday.
//     </p>
//     <p id="user-email">
//       To allow us to watch the price for you, please click "Watch Price For
//       This Product" Button on Discover Page. And we will send the price
//       update to your email: {user.email}
//     </p>
//     {/* <JSONPretty data={user} id="user-details" /> */}
//   </div>
// )
