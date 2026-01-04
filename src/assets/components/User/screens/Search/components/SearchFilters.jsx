import React, { Component } from "react";
import "./SearchFilters.css";

export default class SearchFilters extends Component {
  state = {
    selectedFilter: "all", // default filter
  };

  handleFilterChange = (filter) => {
    this.setState({ selectedFilter: filter });

    if (this.props.onFilterChange) {
      this.props.onFilterChange(filter);
    }
  };

  render() {
    const filters = ["Genres", "Songs", "Artists", "Albums", "Playlists", "Moods"];

    return (
      <div className="search-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => this.handleFilterChange(filter)}
            className={this.state.selectedFilter === filter ? "active" : "default"}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}
