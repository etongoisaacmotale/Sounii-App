import React, { Component } from "react";
import CommunitySection from "./components/CommunitySection.jsx";
import MiniPlayer from "../Home/components/MiniPlayer.jsx";
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

        {/* MiniPlayer */}
        <div className="community-miniplayer">
          <MiniPlayer />
          <MainTabs onMoreClick={this.toggleMoreDropdown} />
        </div>
      </div>
    );
  }
}
