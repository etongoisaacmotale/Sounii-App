import React, { Component } from "react";
import "./NotificationSettings.css"; // <-- import the CSS file

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
      () =>
        localStorage.setItem(
          "notificationSettings",
          JSON.stringify(this.state)
        )
    );
  };

  renderToggle(label, field) {
    return (
      <label className="toggle-row">
        <span className="toggle-label">{label}</span>

        {/* Toggle Switch */}
        <div className="switch">
          <input
            type="checkbox"
            checked={this.state[field]}
            onChange={() => this.handleToggle(field)}
          />
          <span className="slider"></span>
        </div>
      </label>
    );
  }

  render() {
    return (
      <div className="ns-screen">
        {/* Header */}
        <header className="ns-header">
          <h2 className="ns-title">Notification Settings</h2>
        </header>

        {/* Content */}
        <div className="ns-card">
          <h3 className="ns-section-title">Manage Notifications</h3>

          {this.renderToggle("New Music Alerts", "newMusicAlerts")}
          {this.renderToggle("Artist Posts & Updates", "artistPosts")}
          {this.renderToggle("Event Reminders", "eventReminders")}
          {this.renderToggle("Merch Drops", "merchDrops")}
          {this.renderToggle("App Updates", "appUpdates")}
        </div>

        {/* Save button */}
        <button
          className="ns-save-btn"
          onClick={() => alert("Notification preferences saved!")}
        >
          Save Preferences
        </button>
      </div>
    );
  }
}
