import React, { Component } from "react";
import SongCard from "../../../components/SongCard";

// Sample recently played songs (replace with real data/API)
const recentlyPlayedData = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Blinding Lights", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Late Night Jazz", artist: "Various Artists", image: "https://via.placeholder.com/150" },
];

export default class RecentlyPlayed extends Component {
  state = {
    songs: recentlyPlayedData,
  };

  render() {
    const { songs } = this.state;

    return (
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Recently Played</h2>

        {songs.length > 0 ? (
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} playlist={songs} />
            ))}
          </div>
        ) : (
          <div className="text-center text-white text-xl mt-12">
            No recently played songs 😢
          </div>
        )}
      </div>
    );
  }
}
