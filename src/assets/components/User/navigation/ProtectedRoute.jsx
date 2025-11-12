import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

class ProtectedRoute extends Component {
  static contextType = AuthContext;

  render() {
    const { user, loading } = this.context;
    const { children } = this.props;

    if (loading) return <div>Loading...</div>; // or a loader component

    if (!user) return <Navigate to="/login" replace />;

    return children;
  }
}

export default ProtectedRoute;
