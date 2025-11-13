// assets/components/User/components/AuthGuard.jsx
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

class AuthGuard extends Component {
    static contextType = AuthContext;

    render() {
        const { user, loading } = this.context;
        if (loading) return <div>Loading...</div>;
        if (!user) return <Navigate to="/login" replace />;
        return this.props.children;

    }
}

export default AuthGuard;
