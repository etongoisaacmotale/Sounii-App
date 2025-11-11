import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

class AuthGuard extends Component {
    render() {
        const { isAuthenticated, children } = this.props;

        if (!isAuthenticated) {
            // Redirect to login if not authenticated
            return <Navigate to="/login" replace />;
        }

        // Render protected content if authenticated
        return children;
    }
}

export default AuthGuard;