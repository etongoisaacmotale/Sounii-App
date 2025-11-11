import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword/ForgotPasswordScreen"; // ✅ add this
import AppLayout from "../layouts/AppLayout";
import { AuthContext } from "../context/AuthContext";

export default class AppNavigator extends Component {
  static contextType = AuthContext;

  render() {
    const { user } = this.context;

    return (
      <Routes>
        <Route path="/" element={<SplashScreen />} />

        {!user ? (
          <>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} /> {/* ✅ new route */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<AppLayout />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/register" element={<Navigate to="/" replace />} />
            <Route path="/forgot-password" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    );
  }
}
