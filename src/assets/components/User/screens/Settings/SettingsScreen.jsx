import React, { Component } from "react";
import AccountSettings from "./components/AccountSettings.jsx";
import NotificationSettings from "./components/NotificationSettings.jsx";
import PrivacySettings from "./components/PrivacySettings.jsx";
// Optional: You can add SecuritySettings later when created

export default class SettingsScreen extends Component {
  state = {
    activeTab: "account", // "account" | "notifications" | "privacy"
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white">
        {/* Header */}
        <header className="p-4 bg-black/70 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold drop-shadow-lg">Settings</h1>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => this.setActiveTab("account")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "account"
                ? "bg-orange-500 text-black"
                : "bg-black/60 hover:bg-orange-500 hover:text-black"
            }`}
          >
            Account
          </button>
          <button
            onClick={() => this.setActiveTab("notifications")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "notifications"
                ? "bg-orange-500 text-black"
                : "bg-black/60 hover:bg-orange-500 hover:text-black"
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => this.setActiveTab("privacy")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "privacy"
                ? "bg-orange-500 text-black"
                : "bg-black/60 hover:bg-orange-500 hover:text-black"
            }`}
          >
            Privacy
          </button>
        </div>

        {/* Active Settings Section */}
        <main className="p-6 mt-6">
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "privacy" && <PrivacySettings />}
        </main>
      </div>
    );
  }
}
