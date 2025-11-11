// navigation/routes.js
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import CreateScreen from "../screens/Create/CreateScreen";
import WalletScreen from "../screens/Wallet/WalletScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

class WebRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/library" element={<LibraryScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    );
  }
}

export default WebRoutes;