import React, { Component } from "react";
import EventCard from "./components/EventCard.jsx";
import "./EventsScreen.css"; // Make sure to create this CSS file

// Sample events
const sampleEvents = [
  {
    id: 1,
    type: "upcoming",
    title: "Dua Lipa Live",
    artist: "Dua Lipa",
    venue: "Madison Square Garden",
    date: "2025-12-10",
    media: "https://images.unsplash.com/photo-1609395179995-701bbbe3b490?auto=format&fit=crop&w=600&q=80",
    mediaType: "image",
    trending: true,
  },
  {
    id: 2,
    type: "live",
    title: "The Weeknd Concert",
    artist: "The Weeknd",
    venue: "Staples Center",
    date: "2025-11-11",
    media: "https://www.w3schools.com/html/mov_bbb.mp4",
    mediaType: "video",
    trending: true,
  },
  {
    id: 3,
    type: "merch",
    title: "Billie Eilish Hoodie",
    artist: "Billie Eilish",
    venue: "Official Store",
    media: "https://images.unsplash.com/photo-1620156247316-0d8e0b8f55b1?auto=format&fit=crop&w=600&q=80",
    mediaType: "image",
    trending: false,
  },
  {
    id: 4,
    type: "upcoming",
    title: "Bruno Mars Tour",
    artist: "Bruno Mars",
    venue: "O2 Arena",
    date: "2025-12-20",
    media: "",
    mediaType: "text",
    trending: false,
  },
];

export default class EventsScreen extends Component {
  state = {
    activeTab: "upcoming", // upcoming, live, merch
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    // Filter events for active tab
    const filteredEvents = sampleEvents.filter((event) => event.type === activeTab);

    // Trending events carousel
    const trendingEvents = sampleEvents.filter((event) => event.trending);

    return (
      <div className="events-screen-container">
        {/* Header */}
        <h1 className="events-screen-title">Events</h1>

        {/* Tabs */}
        <div className="events-tabs">
          {["upcoming", "live", "merch"].map((tab) => (
            <button
              key={tab}
              onClick={() => this.setActiveTab(tab)}
              className={`events-tab-btn ${
                activeTab === tab ? "active" : ""
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Trending Carousel */}
        {trendingEvents.length > 0 && (
          <div className="events-carousel">
            {trendingEvents.map((event) => (
              <EventCard key={event.id} event={event} carousel />
            ))}
          </div>
        )}

        {/* Event Feed */}
        <div className="events-feed">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="no-events-msg">No events to display.</p>
          )}
        </div>
      </div>
    );
  }
}
