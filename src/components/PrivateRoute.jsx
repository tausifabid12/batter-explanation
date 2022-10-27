import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/ProviderContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#aa076b] mx-auto my-24"></div>
    );
  }
  if (!user) {
    console.log(user, "privat");
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
