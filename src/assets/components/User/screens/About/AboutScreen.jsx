import React, { Component } from "react";
import "./AboutScreen.css";

export default class AboutScreen extends Component {
  render() {
    return (
      <div className="about-screen">
        {/* Header */}
        <header className="about-header">
          <h1 className="about-title">About Sounii</h1>
        </header>

        {/* Content */}
        <main className="about-content">
          <section className="about-section">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-text">
              Sounii is your all-in-one music platform. Discover new tracks, follow artists, join communities, purchase tickets for live events, and manage your wallet seamlessly. We aim to bring music lovers together in one interactive space.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Features</h2>
            <ul className="about-list">
              <li>Personalized Home Feed with Trending & Recommended Songs</li>
              <li>Search and filter music, playlists, and artists</li>
              <li>Community posts with likes and comments</li>
              <li>Events, Tickets, and Merch management</li>
              <li>Wallet with balance, top-up, and transaction history</li>
              <li>Profile customization and settings</li>
            </ul>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Contact Us</h2>
            <p className="about-text">
              Have questions or feedback? Reach out to us at{" "}
              <span className="about-contact">support@sounii.com</span>.
            </p>
          </section>
        </main>
      </div>
    );
  }
}
