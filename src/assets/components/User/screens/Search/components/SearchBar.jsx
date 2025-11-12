import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = { query: "" };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({ query });

    if (this.props.onSearch) {
      this.props.onSearch(query);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSearch) {
      this.props.onSearch(this.state.query);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search for songs, artists, albums..."
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
