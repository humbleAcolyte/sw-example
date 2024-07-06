import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <p>Login to see secret page!</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
