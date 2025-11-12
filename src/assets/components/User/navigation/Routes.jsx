import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import EventScreen from "../screens/Events/EventScreen";

import AuthGuard from "../components/AuthGuard";

export default class Routes extends Component {
  render() {
    return (
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        {/* Protected routes wrapped in AppLayout */}
        <Route
          element={
            <AuthGuard>
              <AppLayout />  {/* MainTabs always visible here */}
            </AuthGuard>
          }
        >
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/library" element={<LibraryScreen />} />
          <Route path="/community" element={<CommunityScreen />} />
          <Route path="/events" element={<EventScreen />} />
        </Route>

        {/* Redirect unknown paths */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }
}
