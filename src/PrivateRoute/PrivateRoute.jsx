/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Loader from "../components/Loader.jsx";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔄 Show loading until Firebase resolves user state
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Loader />
      </div>
    );
  }

  // ❌ If user NOT logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ If user logged in, render the protected page
  return <Outlet />;
};

export default PrivateRoute;
