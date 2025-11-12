import React, { Component } from "react";
import ProfileHeader from "./components/ProfileHeader.jsx";
import UserStats from "./components/UserStats.jsx";
import EditProfileForm from "./components/EditProfileForm.jsx";
import "./profile.css";

export default class ProfileScreen extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white">
        {/* Header */}
        <header className="p-4 bg-black/70 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold drop-shadow-lg">Your Profile</h1>
        </header>

        {/* Main content */}
        <main className="p-4 space-y-8">
          {/* Profile Info */}
          <ProfileHeader />

          {/* User Statistics */}
          <UserStats />

          {/* Edit Profile Form */}
          <EditProfileForm />
        </main>
      </div>
    );
  }
}
