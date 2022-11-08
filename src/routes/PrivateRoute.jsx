import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
