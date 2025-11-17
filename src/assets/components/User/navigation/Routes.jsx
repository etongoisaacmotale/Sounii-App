import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword/ForgotPasswordScreen";

import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import EventsScreen from "../screens/Events/EventsScreen";

export default class AppNavigator extends Component {
  render() {
    return (
      <Routes>
        {/* Splash */}
        <Route path="/splash" element={<SplashScreen />} />

        {/* Auth Screens (now public) */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />

        {/* App Layout (no AuthGuard) */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/library" element={<LibraryScreen />} />
          <Route path="/community" element={<CommunityScreen />} />
          <Route path="/events" element={<EventsScreen />} />
        </Route>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/splash" replace />} />

        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/splash" replace />} />
      </Routes>
    );
  }
}
