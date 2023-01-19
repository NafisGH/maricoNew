import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
    const loggedIn = true;
    return loggedIn ? children : <Navigate replace to='/Login' />;
}

export default ProtectedRoute;