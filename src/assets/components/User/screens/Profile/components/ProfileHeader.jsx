import React, { Component } from "react";

export default class ProfileHeader extends Component {
  state = {
    profile: {
      name: "Sounii User",
      bio: "Music lover. 🎵",
      profilePic: "https://via.placeholder.com/150?text=User",
    },
  };

  componentDidMount() {
    const savedProfile = JSON.parse(localStorage.getItem("sounii_user_profile"));
    if (savedProfile) {
      this.setState({ profile: savedProfile });
    }
  }

  render() {
    const { name, bio, profilePic } = this.state.profile;

    return (
      <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-black via-white/10 to-orange-500/20 rounded-2xl shadow-md">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={profilePic || "https://via.placeholder.com/150?text=User"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover shadow-lg"
          />
        </div>

        {/* Name */}
        <h2 className="mt-4 text-2xl font-bold text-white drop-shadow">
          {name}
        </h2>

        {/* Bio */}
        <p className="mt-2 text-gray-300 max-w-sm">{bio}</p>

        {/* Divider */}
        <div className="mt-4 w-24 h-1 bg-orange-500 rounded-full"></div>
      </div>
    );
  }
}
