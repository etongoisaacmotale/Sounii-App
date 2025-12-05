import React, { Component } from "react";
import "./AccountSettings.css";

export default class AccountSettings extends Component {
  state = {
    emailNotifications: true,
    pushNotifications: true,
    darkMode: false,
    privacy: "public",
    password: "",
    confirmPassword: "",
  };

  handleToggle = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("accountSettings", JSON.stringify(this.state));
    alert("Settings saved successfully!");
  };

  componentDidMount() {
    const savedSettings = localStorage.getItem("accountSettings");
    if (savedSettings) {
      this.setState(JSON.parse(savedSettings));
    }
  }

  render() {
    const {
      emailNotifications,
      pushNotifications,
      darkMode,
      privacy,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="settings-screen">
        <header className="settings-header">
          <h2 className="settings-title">Account Settings</h2>
        </header>

        <form onSubmit={this.handleSave} className="settings-form">
          
          {/* Notifications */}
          <div>
            <h3 className="settings-section-title">Notifications</h3>

            <div className="settings-toggle-row">
              <label>Email Notifications</label>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => this.handleToggle("emailNotifications")}
              />
            </div>

            <div className="settings-toggle-row">
              <label>Push Notifications</label>
              <input
                type="checkbox"
                checked={pushNotifications}
                onChange={() => this.handleToggle("pushNotifications")}
              />
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h3 className="settings-section-title">Appearance</h3>

            <div className="settings-toggle-row">
              <label>Dark Mode</label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => this.handleToggle("darkMode")}
              />
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="settings-section-title">Privacy</h3>

            <select
              name="privacy"
              value={privacy}
              onChange={this.handleChange}
              className="settings-select"
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <h3 className="settings-section-title">Change Password</h3>

            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={password}
              onChange={this.handleChange}
              className="settings-input"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={this.handleChange}
              className="settings-input"
            />
          </div>

          {/* Save */}
          <button type="submit" className="settings-save-btn">
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}
