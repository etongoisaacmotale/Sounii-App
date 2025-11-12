import React, { Component } from "react";

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
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white p-6">
        <header className="p-4 bg-black/70 backdrop-blur-md rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold">Account Settings</h2>
        </header>

        <form
          onSubmit={this.handleSave}
          className="space-y-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg"
        >
          {/* Notifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-400">
              Notifications
            </h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-between">
                <span>Email Notifications</span>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={() => this.handleToggle("emailNotifications")}
                />
              </label>
              <label className="flex items-center justify-between">
                <span>Push Notifications</span>
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  onChange={() => this.handleToggle("pushNotifications")}
                />
              </label>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-400">
              Appearance
            </h3>
            <label className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => this.handleToggle("darkMode")}
              />
            </label>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-400">
              Privacy
            </h3>
            <select
              name="privacy"
              value={privacy}
              onChange={this.handleChange}
              className="w-full p-2 rounded-md bg-black/40 text-white"
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          {/* Password Update */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-400">
              Change Password
            </h3>
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={password}
              onChange={this.handleChange}
              className="w-full p-2 mb-2 rounded-md bg-black/40 text-white"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={this.handleChange}
              className="w-full p-2 rounded-md bg-black/40 text-white"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}
