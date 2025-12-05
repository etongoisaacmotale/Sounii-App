import React, { Component } from "react";
import LikedSongs from "./components/LikedSongs.jsx";
import Playlist from "./components/Playlist.jsx";
import RecentlyPlayed from "./components/RecentlyPlayed.jsx";
import "./LibraryScreen.css";
import MainTabs from "../../navigation/MainTabs.jsx";

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
      <div className="library-container">
        {/* Header */}
        <header className="library-header">
          <h1>Your Library</h1>
        </header>

        {/* Tabs */}
        <div className="library-tabs">
          <button
            className={`tab-button ${activeTab === "liked" ? "active" : ""}`}
            onClick={() => this.setActiveTab("liked")}
          >
            Liked Songs
          </button>
          <button
            className={`tab-button ${activeTab === "playlists" ? "active" : ""}`}
            onClick={() => this.setActiveTab("playlists")}
          >
            Playlists
          </button>
          <button
            className={`tab-button ${activeTab === "recent" ? "active" : ""}`}
            onClick={() => this.setActiveTab("recent")}
          >
            Recently Played
          </button>
        </div>

        {/* Content */}
        <main className="library-content">
          {activeTab === "liked" && <LikedSongs />}
          {activeTab === "playlists" && <Playlist />}
          {activeTab === "recent" && <RecentlyPlayed />}
        </main>

        <MainTabs onMoreClick={this.toggleMoreDropdown} />
      </div>
    );
  }
}
