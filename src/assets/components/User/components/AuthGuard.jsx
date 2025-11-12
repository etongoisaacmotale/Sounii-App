// assets/components/User/components/AuthGuard.jsx
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

class AuthGuard extends Component {
  static contextType = AuthContext;

  render() {
    const { isAuthenticated, loading } = this.context;

    if (loading) return <p>Loading...</p>;
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return this.props.children;
  }
}

export default AuthGuard;
