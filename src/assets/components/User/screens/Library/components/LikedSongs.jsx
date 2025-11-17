import React, { Component } from "react";
import SongCard from "../../Home/components/SongCard";
import "./LibraryComponents.css";

const likedSongsData = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Blinding Lights", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
];

export default class LikedSongs extends Component {
  state = { likedSongs: likedSongsData };

  render() {
    const { likedSongs } = this.state;

    return (
      <div className="library-screen">
        <div className="library-screen-content">
          {likedSongs.length > 0 ? (
            <div className="library-grid">
              {likedSongs.map((song) => (
                <SongCard key={song.id} song={song} playlist={likedSongs} />
              ))}
            </div>
          ) : (
            <div className="library-empty-message">
              You haven't liked any songs yet 😢
            </div>
          )}
        </div>
      </div>
    );
  }
}
