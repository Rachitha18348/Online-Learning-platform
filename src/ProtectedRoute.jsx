import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );


  // Not logged in
  if (!loggedInUser) {
    return <Navigate to="/" replace />;
  }


  // Wrong role
  if (loggedInUser.role !== role) {

    if (loggedInUser.role === "student") {
      return (
        <Navigate
          to="/student/dashboard"
          replace
        />
      );
    }


    if (loggedInUser.role === "instructor") {
      return (
        <Navigate
          to="/instructor/dashboard"
          replace
        />
      );
    }

  }


  return children;
}

export default ProtectedRoute;