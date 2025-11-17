import React, { Component } from "react";
import SongCard from "../../../components/SongCard";
import "./LibraryComponents.css";

const recentlyPlayedData = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Blinding Lights", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Late Night Jazz", artist: "Various Artists", image: "https://via.placeholder.com/150" },
];

export default class RecentlyPlayed extends Component {
  state = { songs: recentlyPlayedData };

  render() {
    const { songs } = this.state;

    return (
      <div className="library-screen">
        <div className="library-screen-content">
          {songs.length > 0 ? (
            <div className="library-scroll">
              {songs.map((song) => (
                <SongCard key={song.id} song={song} playlist={songs} />
              ))}
            </div>
          ) : (
            <div className="library-empty-message">
              No recently played songs 😢
            </div>
          )}
        </div>
      </div>
    );
  }
}
