import React, { Component } from "react";

export default class EditProfileForm extends Component {
  state = {
    name: "",
    bio: "",
    profilePic: "",
  };

  componentDidMount() {
    const savedProfile = JSON.parse(localStorage.getItem("sounii_user_profile"));
    if (savedProfile) {
      this.setState({
        name: savedProfile.name || "",
        bio: savedProfile.bio || "",
        profilePic: savedProfile.profilePic || "",
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = (e) => {
    e.preventDefault();
    const { name, bio, profilePic } = this.state;

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const updatedProfile = { name, bio, profilePic };
    localStorage.setItem("sounii_user_profile", JSON.stringify(updatedProfile));

    if (this.props.onProfileUpdated) {
      this.props.onProfileUpdated(updatedProfile);
    }

    alert("✅ Profile updated successfully!");
  };

  render() {
    const { name, bio, profilePic } = this.state;

    return (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-xl text-white shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Edit Profile</h2>

        <form onSubmit={this.handleSave} className="space-y-4">
          {/* Profile Picture URL */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Profile Picture URL</label>
            <input
              type="text"
              name="profilePic"
              value={profilePic}
              onChange={this.handleChange}
              placeholder="Paste image link"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Preview */}
          {profilePic && (
            <div className="flex justify-center">
              <img
                src={profilePic}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full border-2 border-orange-500 object-cover"
              />
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Bio</label>
            <textarea
              name="bio"
              value={bio}
              onChange={this.handleChange}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}
