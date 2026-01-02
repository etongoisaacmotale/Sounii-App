import React, { Component } from "react";
import SongCard from "../../../components/SongCard";

export default class SearchResults extends Component {
  render() {
    const { songs } = this.props;

    if (!songs || songs.length === 0) {
      return (
        <div className="text-center text-white text-xl mt-12">
          No results found 😢
        </div>
      );
    }

    return (
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
          Search Results
        </h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} playlist={songs} />
          ))}
        </div>
      </div>
    );
  }
}
