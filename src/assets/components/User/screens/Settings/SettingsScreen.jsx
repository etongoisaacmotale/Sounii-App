import React, { Component } from "react";
import AccountSettings from "./components/AccountSettings.jsx";
import NotificationSettings from "./components/NotificationSettings.jsx";
import PrivacySettings from "./components/PrivacySettings.jsx";
import "./SettingsScreen.css";

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
      <div className="settings-screen">
        {/* Header */}
        <header className="settings-header">
          <h1>Settings</h1>
        </header>

        {/* Tabs */}
        <div className="settings-tabs">
          <button
            className={`settings-tab ${activeTab === "account" ? "active" : ""}`}
            onClick={() => this.setActiveTab("account")}
          >
            Account
          </button>
          <button
            className={`settings-tab ${activeTab === "notifications" ? "active" : ""}`}
            onClick={() => this.setActiveTab("notifications")}
          >
            Notifications
          </button>
          <button
            className={`settings-tab ${activeTab === "privacy" ? "active" : ""}`}
            onClick={() => this.setActiveTab("privacy")}
          >
            Privacy
          </button>
        </div>

        {/* Active Settings Section */}
        <main className="settings-main">
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "privacy" && <PrivacySettings />}
        </main>
      </div>
    );
  }
}
