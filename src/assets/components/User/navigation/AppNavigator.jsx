import React, { Component } from "react";
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

import ProfileScreen from "../screens/Profile/ProfileScreen";
import WalletScreen from "../screens/Wallet/WalletScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import AboutScreen from "../screens/About/AboutScreen";
import HelpScreen from "../screens/Help/HelpScreen";

class AppNavigator extends Component {
  render() {

    return (
      <Routes>
        {/* Splash */}
        <Route path="/splash" element={<SplashScreen />} />

        {/* Public Auth Screens */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />

        {/* Main Screens (Not Protected Anymore) */}
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/library" element={<LibraryScreen />} />

        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/help" element={<HelpScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
        <Route path="/events" element={<EventsScreen />} />


          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/help" element={<HelpScreen />} />

          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="*" element={<Navigate to="/home" replace />} />

        </Routes>
        );
  }
}

        export default AppNavigator;
