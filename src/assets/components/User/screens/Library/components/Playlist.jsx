import React, { Component } from "react";
import SongCard from "../../../components/SongCard";

// Sample playlist data (replace with real data/API later)
const samplePlaylist = {
  id: 1,
  name: "Morning Chill",
  description: "Relaxing tunes to start your day",
  image: "https://via.placeholder.com/300",
  songs: [
    { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Acoustic Mornings", artist: "Various Artists", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Late Night Jazz", artist: "Various Artists", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Levitating", artist: "Dua Lipa", image: "https://via.placeholder.com/150" },
  ],
};

export default class Playlist extends Component {
  state = {
    playlist: samplePlaylist,
  };

  render() {
    const { playlist } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500">
        {/* Header */}
        <header className="p-4 flex items-center justify-between text-white sticky top-0 z-10 bg-black/70 backdrop-blur-md">
          <h1 className="text-3xl font-bold drop-shadow-lg">{playlist.name}</h1>
        </header>

        {/* Playlist info */}
        <div className="flex flex-col items-center text-center p-6">
          <img
            src={playlist.image}
            alt={playlist.name}
            className="w-64 h-64 rounded-lg mb-4 object-cover border-2 border-orange-500 shadow-lg"
          />
          <p className="text-gray-200 text-lg">{playlist.description}</p>
        </div>

        {/* Songs */}
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlist.songs.map((song) => (
            <SongCard key={song.id} song={song} playlist={playlist.songs} />
          ))}
        </main>
      </div>
    );
  }
}
