import React, { Component } from "react";

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
          <h2 className="text-3xl font-bold">Privacy Settings</h2>
        </header>

        {/* Settings Section */}
        <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-3">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Manage Your Privacy
          </h3>

          {this.renderToggle("Show Listening Activity", "showListeningActivity")}
          {this.renderToggle("Allow Friend Requests", "allowFriendRequests")}
          {this.renderToggle("Personalized Recommendations", "personalizedRecommendations")}
          {this.renderToggle("Share Data with Artists", "shareDataWithArtists")}
          {this.renderToggle("Make Profile Public", "makeProfilePublic")}
        </div>

        {/* Save Button */}
        <button
          onClick={() =>
            alert("Privacy preferences saved successfully!")
          }
          className="mt-6 w-full bg-orange-500 text-black font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Save Preferences
        </button>
      </div>
    );
  }
}
