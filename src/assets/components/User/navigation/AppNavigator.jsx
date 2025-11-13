import React, { Component, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword/ForgotPasswordScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import EventsScreen from "../screens/Events/EventsScreen";
import AuthGuard from "../components/AuthGuard";
import { AuthContext } from "../context/AuthContext";

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
        {/* Splash screen */}
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
        <Route
          path="/forgot-password"
          element={isAuthenticated ? <Navigate to="/home" /> : <ForgotPasswordScreen />}
        />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <AuthGuard>
              <HomeScreen />
            </AuthGuard>
          }
        />
        <Route
          path="/search"
          element={
            <AuthGuard>
              <SearchScreen />
            </AuthGuard>
          }
        />
        <Route
          path="/library"
          element={
            <AuthGuard>
              <LibraryScreen />
            </AuthGuard>
          }
        />
        <Route
          path="/community"
          element={
            <AuthGuard>
              <CommunityScreen />
            </AuthGuard>
          }
        />
        <Route
          path="/events"
          element={
            <AuthGuard>
              <EventsScreen />
            </AuthGuard>
          }
        />

        {/* Default route */}
        <Route path="/" element={<Navigate to="/splash" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
}

export default withAuth(AppNavigator);
