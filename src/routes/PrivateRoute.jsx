import { Spinner } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-wrap gap-2">
        <Spinner color="info" aria-label="Info spinner example" />
        <Spinner color="success" aria-label="Success spinner example" />
        <Spinner color="failure" aria-label="Failure spinner example" />
        <Spinner color="warning" aria-label="Warning spinner example" />
        <Spinner color="pink" aria-label="Pink spinner example" />
        <Spinner color="purple" aria-label="Purple spinner example" />
      </div>
    );
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
