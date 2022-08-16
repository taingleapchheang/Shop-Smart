import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      type="button"
      class="btn btn-primary btn-lg"
      onClick={() =>
        loginWithRedirect({
          returnTo: { targetUrl: "http://localhost:3000/account" },
        })
      }
    >
      Log In
    </Button>
  );
};

export default LoginButton;
