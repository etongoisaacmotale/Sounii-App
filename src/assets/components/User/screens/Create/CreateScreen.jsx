import React, { Component } from "react";
import CreatePlaylistForm from "./CreatePlaylistForm.jsx";

export default class CreateScreen extends Component {
  state = {
    playlists: JSON.parse(localStorage.getItem("sounii_playlists")) || [],
  };

  handlePlaylistCreated = (newPlaylist) => {
    const updatedPlaylists = [...this.state.playlists, newPlaylist];
    this.setState({ playlists: updatedPlaylists });
  };

  renderPlaylists = () => {
    const { playlists } = this.state;

    if (playlists.length === 0) {
      return (
        <p className="text-center text-gray-300 mt-6">
          You haven’t created any playlists yet.
        </p>
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-black/70 rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-lg"
          >
            <img
              src={playlist.image}
              alt={playlist.title}
              className="w-32 h-32 rounded-lg object-cover border-2 border-orange-500 mb-3"
            />
            <h3 className="font-semibold text-white text-lg">
              {playlist.title}
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              {playlist.description || "No description"}
            </p>
            <button
              onClick={() => alert(`Opening ${playlist.title}...`)}
              className="mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg"
            >
              Open
            </button>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-white to-orange-500 text-white">
        {/* Header */}
        <header className="p-4 flex items-center justify-between sticky top-0 z-10 bg-black/70 backdrop-blur-md">
          <h1 className="text-3xl font-bold drop-shadow-lg">Create</h1>
        </header>

        {/* Create Playlist Form */}
        <section className="p-4">
          <CreatePlaylistForm onPlaylistCreated={this.handlePlaylistCreated} />
        </section>

        {/* Display User Playlists */}
        <section className="p-4">
          <h2 className="text-2xl font-bold mb-2">Your Playlists</h2>
          {this.renderPlaylists()}
        </section>
      </div>
    );
  }
}
