import React, { Component } from "react";

export default class CreatePlaylistForm extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    playlists: JSON.parse(localStorage.getItem("sounii_playlists")) || [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, image, playlists } = this.state;

    if (!title.trim()) {
      alert("Please enter a playlist name.");
      return;
    }

    const newPlaylist = {
      id: Date.now(),
      title,
      description,
      image: image || "https://via.placeholder.com/150?text=Playlist",
      createdAt: new Date().toISOString(),
    };

    const updatedPlaylists = [...playlists, newPlaylist];

    // Save to localStorage
    localStorage.setItem("sounii_playlists", JSON.stringify(updatedPlaylists));

    // Update state
    this.setState({
      playlists: updatedPlaylists,
      title: "",
      description: "",
      image: "",
    });

    // Notify parent (optional)
    if (this.props.onPlaylistCreated) {
      this.props.onPlaylistCreated(newPlaylist);
    }

    alert("🎧 Playlist created successfully!");
  };

  render() {
    const { title, description, image } = this.state;

    return (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-xl text-white shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Create New Playlist</h2>

        <form onSubmit={this.handleSubmit} className="space-y-4">
          {/* Playlist Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Playlist Name</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder="Enter playlist name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={this.handleChange}
              placeholder="Describe your playlist"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Cover Image URL</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.handleChange}
              placeholder="Paste image link"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Preview */}
          {image && (
            <img
              src={image}
              alt="Playlist Preview"
              className="w-32 h-32 rounded-lg object-cover border-2 border-orange-500 mx-auto"
            />
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 rounded-lg transition-colors"
          >
            Create Playlist
          </button>
        </form>
      </div>
    );
  }
}
