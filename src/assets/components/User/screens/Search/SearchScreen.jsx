import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";
import SearchResults from "./components/SearchResults";

// Sample songs (replace with API or real data)
const allSongs = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Top Hits 2025", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Acoustic Mornings", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Late Night Jazz", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Blinding Lights", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
  { id: 6, title: "Levitating", artist: "Dua Lipa", image: "https://via.placeholder.com/150" },
];

export default class SearchScreen extends Component {
  state = {
    query: "",
    filter: "all",
    filteredSongs: allSongs,
  };

  handleSearch = (query) => {
    this.setState({ query }, this.applyFilters);
  };

  handleFilterChange = (filter) => {
    this.setState({ filter }, this.applyFilters);
  };

  applyFilters = () => {
    const { query, filter } = this.state;
    let filtered = allSongs;

    if (filter !== "all") {
      if (filter === "songs") filtered = allSongs.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()));
      else if (filter === "artists") filtered = allSongs.filter((s) => s.artist.toLowerCase().includes(query.toLowerCase()));
      // Add logic for albums, playlists, moods if needed
    } else if (query) {
      filtered = allSongs.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.artist.toLowerCase().includes(query.toLowerCase())
      );
    }

    this.setState({ filteredSongs: filtered });
  };

  render() {
    const { filteredSongs } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500">
        {/* Header */}
        <header className="p-4 flex items-center justify-between text-white sticky top-0 z-10 bg-black/70 backdrop-blur-md">
          <h1 className="text-3xl font-bold drop-shadow-lg">Sounii Search</h1>
        </header>

        {/* Search Bar */}
        <SearchBar onSearch={this.handleSearch} />

        {/* Search Filters */}
        <SearchFilters onFilterChange={this.handleFilterChange} />

        {/* Search Results */}
        <main className="p-4 space-y-12">
          <SearchResults songs={filteredSongs} />
        </main>
      </div>
    );
  }
}
