import React, { Component } from "react";
import CommunitySection from "./components/CommunitySection.jsx";
import MiniPlayer from "../Home/components/MiniPlayer.jsx"; // assuming your MiniPlayer is shared

export default class CommunityScreen extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 flex flex-col">
        {/* Header */}
        <header className="p-4 flex items-center justify-between text-white sticky top-0 z-10 bg-black/70 backdrop-blur-md">
          <h1 className="text-3xl font-bold drop-shadow-lg">Community</h1>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 space-y-6">
          <CommunitySection />
        </main>

        {/* MiniPlayer */}
        <div className="sticky bottom-0">
          <MiniPlayer />
        </div>
      </div>
    );
  }
}
