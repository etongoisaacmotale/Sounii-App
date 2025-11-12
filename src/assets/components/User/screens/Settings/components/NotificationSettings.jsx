import React, { Component } from "react";

export default class NotificationSettings extends Component {
  state = {
    newMusicAlerts: true,
    artistPosts: true,
    eventReminders: false,
    merchDrops: true,
    appUpdates: true,
  };

  componentDidMount() {
    const saved = localStorage.getItem("notificationSettings");
    if (saved) this.setState(JSON.parse(saved));
  }

  handleToggle = (field) => {
    this.setState(
      (prevState) => ({ [field]: !prevState[field] }),
      () => {
        localStorage.setItem("notificationSettings", JSON.stringify(this.state));
      }
    );
  };

  renderToggle = (label, field) => (
    <label className="flex items-center justify-between bg-black/40 rounded-lg p-3 mb-3 hover:bg-black/60 transition-all">
      <span className="text-white font-medium">{label}</span>
      <input
        type="checkbox"
        checked={this.state[field]}
        onChange={() => this.handleToggle(field)}
        className="accent-orange-500 w-5 h-5"
      />
    </label>
  );

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white p-6">
        {/* Header */}
        <header className="p-4 bg-black/70 backdrop-blur-md rounded-lg shadow-lg mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Notification Settings</h2>
        </header>

        {/* Settings List */}
        <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-3">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Manage Notifications
          </h3>

          {this.renderToggle("New Music Alerts", "newMusicAlerts")}
          {this.renderToggle("Artist Posts & Updates", "artistPosts")}
          {this.renderToggle("Event Reminders", "eventReminders")}
          {this.renderToggle("Merch Drops", "merchDrops")}
          {this.renderToggle("App Updates", "appUpdates")}
        </div>

        {/* Save Button */}
        <button
          onClick={() =>
            alert("Notification preferences saved successfully!")
          }
          className="mt-6 w-full bg-orange-500 text-black font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Save Preferences
        </button>
      </div>
    );
  }
}
