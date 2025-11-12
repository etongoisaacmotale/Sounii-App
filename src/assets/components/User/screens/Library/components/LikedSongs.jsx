import React, { Component } from "react";
import SongCard from "../../Home/components/SongCard";

// Sample liked songs (replace with API or user data)
const likedSongsData = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Blinding Lights", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
];

export default class LikedSongs extends Component {
  state = {
    likedSongs: likedSongsData,
  };

  render() {
    const { likedSongs } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500">
        {/* Header */}
        <header className="p-4 flex items-center justify-between text-white sticky top-0 z-10 bg-black/70 backdrop-blur-md">
          <h1 className="text-3xl font-bold drop-shadow-lg">Liked Songs</h1>
        </header>

        {/* Content */}
        <main className="p-4 space-y-12">
          {likedSongs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {likedSongs.map((song) => (
                <SongCard key={song.id} song={song} playlist={likedSongs} />
              ))}
            </div>
          ) : (
            <div className="text-center text-white text-xl mt-12">
              You haven't liked any songs yet 😢
            </div>
          )}
        </main>
      </div>
    );
  }
}
