import React from "react";
import { Navigate } from "react-router-dom";

// Simple auth simulation
const isAuthenticated = false; // Change to true to simulate login

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
