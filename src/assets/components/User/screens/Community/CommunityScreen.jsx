import React, { Component } from "react";
import CommunitySection from "./components/CommunitySection.jsx";
import MiniPlayer from "../../components/player/MiniPlayer.jsx";
import MainTabs from "../../navigation/MainTabs.jsx";
import "./CommunityScreen.css";

export default class CommunityScreen extends Component {
  render() {
    return (
      <div className="community-screen">

        {/* Header */}
        <header className="community-header">
          <h1>Community</h1>
        </header>

        {/* Main content */}
        <main className="community-main">
          <CommunitySection />
        </main>
      </div>
    );
  }
}
