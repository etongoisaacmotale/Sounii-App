import React, { Component } from "react";
import "./PrivacySettings.css";

export default class PrivacySettings extends Component {
  state = {
    showListeningActivity: true,
    allowFriendRequests: true,
    personalizedRecommendations: true,
    shareDataWithArtists: false,
    makeProfilePublic: true,
  };

  componentDidMount() {
    const saved = localStorage.getItem("privacySettings");
    if (saved) this.setState(JSON.parse(saved));
  }

  handleToggle = (field) => {
    this.setState(
      (prevState) => ({ [field]: !prevState[field] }),
      () => {
        localStorage.setItem("privacySettings", JSON.stringify(this.state));
      }
    );
  };

  renderToggle = (label, field) => (
    <label className="toggle-row">
      <span className="toggle-label">{label}</span>
      <input
        type="checkbox"
        checked={this.state[field]}
        onChange={() => this.handleToggle(field)}
        className="switch"
      />
    </label>
  );

  render() {
    return (
      <div className="ps-screen">
        <header className="ps-header">
          <h2 className="ps-title">Privacy Settings</h2>
        </header>

        <div className="ps-card">
          <h3 className="ps-section-title">Manage Your Privacy</h3>
          {this.renderToggle("Show Listening Activity", "showListeningActivity")}
          {this.renderToggle("Allow Friend Requests", "allowFriendRequests")}
          {this.renderToggle("Personalized Recommendations", "personalizedRecommendations")}
          {this.renderToggle("Share Data with Artists", "shareDataWithArtists")}
          {this.renderToggle("Make Profile Public", "makeProfilePublic")}
        </div>

        <button
          onClick={() => alert("Privacy preferences saved successfully!")}
          className="ps-save-btn"
        >
          Save Preferences
        </button>
      </div>
    );
  }
}
