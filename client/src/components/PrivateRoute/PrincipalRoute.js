import React from "react";
import { Navigate } from "react-router-dom";

const PrincipalRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.role === "Principal") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrincipalRoute;
