import React from "react";
import { Navigate } from "react-router-dom";

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div>
        <h3>SECRET PAGE!!!</h3>
      </div>
    );
  }

  return <Navigate to="/login" replace />;
};

export default SecretPage;
