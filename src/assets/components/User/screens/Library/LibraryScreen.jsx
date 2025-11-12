import React, { Component } from "react";
import LikedSongs from "./components/LikedSongs.jsx";
import Playlist from "./components/Playlist.jsx";
import RecentlyPlayed from "./components/RecentlyPlayed.jsx";

export default class LibraryScreen extends Component {
  state = {
    activeTab: "liked", // 'liked', 'playlists', 'recent'
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500">
        {/* Header */}
        <header className="p-4 flex items-center justify-between text-white sticky top-0 z-10 bg-black/70 backdrop-blur-md">
          <h1 className="text-3xl font-bold drop-shadow-lg">Your Library</h1>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => this.setActiveTab("liked")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "liked"
                ? "bg-orange-500 text-black"
                : "bg-black/70 text-white hover:bg-orange-500 hover:text-black"
            }`}
          >
            Liked Songs
          </button>
          <button
            onClick={() => this.setActiveTab("playlists")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "playlists"
                ? "bg-orange-500 text-black"
                : "bg-black/70 text-white hover:bg-orange-500 hover:text-black"
            }`}
          >
            Playlists
          </button>
          <button
            onClick={() => this.setActiveTab("recent")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === "recent"
                ? "bg-orange-500 text-black"
                : "bg-black/70 text-white hover:bg-orange-500 hover:text-black"
            }`}
          >
            Recently Played
          </button>
        </div>

        {/* Content */}
        <main className="p-4 mt-6 space-y-6">
          {activeTab === "liked" && <LikedSongs />}
          {activeTab === "playlists" && <Playlist />}
          {activeTab === "recent" && <RecentlyPlayed />}
        </main>
      </div>
    );
  }
}
