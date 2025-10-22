// src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import useToysData from "../Hook/useToysData";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { loading } = useToysData();
  const location = useLocation();

  // 1. Show a loading indicator while Firebase is checking auth state
  // This solves the "don't redirect on reload" problem
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // 2. If loading is done and there is a user, show the page
  if (user) {
    return children;
  }

  // 3. If loading is done and there's no user, redirect to login
  // We save the 'from' location so we can redirect back after login
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
