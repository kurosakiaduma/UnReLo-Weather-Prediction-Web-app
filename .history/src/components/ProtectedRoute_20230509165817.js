import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, Route } from "react-router-dom";
import Home from "../pages/Home";

function PrivateRoute({ element: Component, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Home /> : <Navigate to="/" />}
    />
  );
}

export default PrivateRoute;
