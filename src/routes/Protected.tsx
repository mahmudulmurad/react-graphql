import React from "react";
import { Navigate, PathRouteProps } from "react-router-dom";

interface ProtectedRouteProps extends PathRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isAuthenticated,
}) => {
  return isAuthenticated ? <>{element}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
