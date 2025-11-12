import React, { Component } from "react";
import EventCard from "./components/EventCard";

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

    // Trending carousel (for all types or just upcoming/live)
    const trendingEvents = sampleEvents.filter((event) => event.trending);

    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 p-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-6">Events</h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {["upcoming", "live", "merch"].map((tab) => (
            <button
              key={tab}
              onClick={() => this.setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-orange-500 text-black"
                  : "bg-black/70 text-white hover:bg-orange-500 hover:text-black"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Trending Carousel */}
        {trendingEvents.length > 0 && (
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide mb-6">
            {trendingEvents.map((event) => (
              <EventCard key={event.id} event={event} carousel />
            ))}
          </div>
        )}

        {/* Event Feed */}
        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="text-white text-center">No events to display.</p>
          )}
        </div>
      </div>
    );
  }
}
