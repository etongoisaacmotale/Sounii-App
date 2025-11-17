import React, { Component } from "react";
import SongCard from "../../../components/SongCard";
import "./LibraryComponents.css";

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
  state = { playlist: samplePlaylist };

  render() {
    const { playlist } = this.state;

    return (
      <div className="library-screen">
        <div className="library-screen-content">
          {/* Playlist Info */}
          <div className="playlist-info">
            <img
              src={playlist.image}
              alt={playlist.name}
              className="playlist-image"
            />
            <p className="playlist-description">{playlist.description}</p>
          </div>

          {/* Songs */}
          {playlist.songs.length > 0 ? (
            <div className="library-grid">
              {playlist.songs.map((song) => (
                <SongCard key={song.id} song={song} playlist={playlist.songs} />
              ))}
            </div>
          ) : (
            <div className="library-empty-message">
              No songs in this playlist 😢
            </div>
          )}
        </div>
      </div>
    );
  }
}
