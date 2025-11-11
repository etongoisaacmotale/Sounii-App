// src/assets/components/User/navigation/StackNavigator.jsx
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import SongDetailScreen from "../screens/SongDetail/SongDetailScreen.jsx";
import SettingsScreen from "../screens/settings/SettingsScreen.jsx";
import ProfileScreen from "../screens/profile/ProfileScreen.jsx";

export default class StackNavigator extends Component {
  render() {
    return (
      <Routes>
        <Route path="/home" element={<SongDetailScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="*" element={<SongDetailScreen />} />
      </Routes>
    );
  }
}
