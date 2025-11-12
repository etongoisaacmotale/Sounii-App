// assets/components/User/navigation/AppNavigator.jsx
import React, { Component, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import EventsScreen from "../screens/Events/EventsScreen";
import AuthGuard from "../components/AuthGuard";
import { AuthContext } from "../context/AuthContext";

// HOC to pass auth context to class component
function withAuth(Component) {
  return function Wrapped(props) {
    const auth = useContext(AuthContext);
    return <Component {...props} auth={auth} />;
  };
}

class AppNavigator extends Component {
  render() {
    const { auth } = this.props;
    const isAuthenticated = auth?.user !== null;

    return (
      <Routes>
        {/* Splash screen route */}
        <Route path="/splash" element={<SplashScreen />} />

        {/* Public routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <LoginScreen />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/home" /> : <RegisterScreen />}
        />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <AuthGuard>
              {isAuthenticated ? <HomeScreen /> : <Navigate to="/login" />}
            </AuthGuard>
          }
        />
        <Route
          path="/search"
          element={
            <AuthGuard>
              {isAuthenticated ? <SearchScreen /> : <Navigate to="/login" />}
            </AuthGuard>
          }
        />
        <Route
          path="/library"
          element={
            <AuthGuard>
              {isAuthenticated ? <LibraryScreen /> : <Navigate to="/login" />}
            </AuthGuard>
          }
        />
        <Route
          path="/community"
          element={
            <AuthGuard>
              {isAuthenticated ? <CommunityScreen /> : <Navigate to="/login" />}
            </AuthGuard>
          }
        />
        <Route
          path="/events"
          element={
            <AuthGuard>
              {isAuthenticated ? <EventsScreen /> : <Navigate to="/login" />}
            </AuthGuard>
          }
        />

        {/* Default route redirects to splash */}
        <Route path="/" element={<Navigate to="/splash" />} />
        <Route path="*" element={<Navigate to="/splash" />} />
      </Routes>
    );
  }
}

export default withAuth(AppNavigator);
