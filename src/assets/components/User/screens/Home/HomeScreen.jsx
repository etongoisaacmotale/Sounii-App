import React, { Component, createRef } from "react";
import RecommendedSection from "./components/RecommendedSection";
import TrendingSection from "./components/TrendingSection";
import SearchBar from "../Search/components/SearchBar";
import SearchFilters from "../Search/components/SearchFilters";
import { withRouter } from "../../HOC/withRouter";
import "./HomeScreen.css";

const allSongs = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Top Hits 2025", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Acoustic Mornings", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Late Night Jazz", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Blinding Lights", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
  { id: 6, title: "Levitating", artist: "Dua Lipa", image: "https://via.placeholder.com/150" },
];

class HomeScreen extends Component {
  state = {
    query: "",
    filter: "all",
    filteredSongs: allSongs,
    showMoreDropdown: false,
  };

  dropdownRef = createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target)
    ) {
      this.setState({ showMoreDropdown: false });
    }
  };

  getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning 🌅";
    if (hour < 18) return "Good Afternoon ☀️";
    return "Good Evening 🌙";
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
    } else if (query) {
      filtered = allSongs.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.artist.toLowerCase().includes(query.toLowerCase())
      );
    }

    this.setState({ filteredSongs: filtered });
  };

  toggleMoreDropdown = () => {
    this.setState((prev) => ({ showMoreDropdown: !prev.showMoreDropdown }));
  };

  handleNavigate = (path) => {
    this.props.navigate(path); // from withRouter
    this.setState({ showMoreDropdown: false });
  };

  render() {
    const { filteredSongs, showMoreDropdown } = this.state;

    const moreOptions = [
      { id: 1, name: "Profile", path: "/profile" },
      { id: 2, name: "Wallet", path: "/wallet" },
      { id: 3, name: "Settings", path: "/settings" },
      { id: 4, name: "About", path: "/about" },
      { id: 5, name: "Help", path: "/help" },
    ];

    return (
      <div className="home-container pb-20">
        <header className="home-header">
          <h1>Sounii</h1>
          <div style={{ position: "relative" }} ref={this.dropdownRef}>
            <button className="more-btn" onClick={this.toggleMoreDropdown}>
              More
            </button>
            {showMoreDropdown && (
              <div className="more-dropdown">
                {moreOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => this.handleNavigate(opt.path)}
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="greeting">{this.getGreeting()}</div>

        <div className="search-section">
          <SearchBar onSearch={this.handleSearch} />
          <SearchFilters onFilterChange={this.handleFilterChange} />
        </div>

        <main className="home-main">
          <RecommendedSection songs={filteredSongs} />
          <TrendingSection songs={filteredSongs} />
        </main>

      </div>
    );
  }
}

export default withRouter(HomeScreen);
