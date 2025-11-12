import React, { Component } from "react";

export default class AboutScreen extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white p-6">
        {/* Header */}
        <header className="p-4 bg-black/70 backdrop-blur-md rounded-lg shadow-lg mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold drop-shadow-lg">About Sounii</h1>
        </header>

        {/* Content */}
        <main className="space-y-6">
          <section className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Our Mission</h2>
            <p className="text-gray-300">
              Sounii is your all-in-one music platform. Discover new tracks, follow artists, join communities, purchase tickets for live events, and manage your wallet seamlessly. We aim to bring music lovers together in one interactive space.
            </p>
          </section>

          <section className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Personalized Home Feed with Trending & Recommended Songs</li>
              <li>Search and filter music, playlists, and artists</li>
              <li>Community posts with likes and comments</li>
              <li>Events, Tickets, and Merch management</li>
              <li>Wallet with balance, top-up, and transaction history</li>
              <li>Profile customization and settings</li>
            </ul>
          </section>

          <section className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Contact Us</h2>
            <p className="text-gray-300">
              Have questions or feedback? Reach out to us at{" "}
              <span className="text-orange-500 font-semibold">support@sounii.com</span>.
            </p>
          </section>
        </main>
      </div>
    );
  }
}
