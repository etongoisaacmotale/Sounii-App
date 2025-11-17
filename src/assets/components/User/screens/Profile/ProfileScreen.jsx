import React, { Component } from "react";
import defaultAvatar from "../../assets/images/avatar.png";
import "./profile.css";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    const loadedUser =
      props.user || JSON.parse(localStorage.getItem("user")) || {};

    const safeUser = {
      username: "",
      email: "",
      phone: "",
      password: "",
      bio: "",
      photo: "",
      playlists: [],
      comments: [],
      ...loadedUser,
    };

    this.state = {
      user: safeUser,
      previewPhoto: safeUser.photo || "",
    };
  }

  handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const updatedUser = { ...this.state.user, photo: reader.result };

      this.setState({
        user: updatedUser,
        previewPhoto: reader.result,
      });

      localStorage.setItem("user", JSON.stringify(updatedUser));
    };

    reader.readAsDataURL(file);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...this.state.user, [name]: value };
    this.setState({ user: updatedUser });
  };

  saveChanges = () => {
    localStorage.setItem("user", JSON.stringify(this.state.user));
    alert("Profile updated successfully.");
  };

  logout = () => {
    alert("Logged out.");
  };

  deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      localStorage.removeItem("user");
      alert("Account deleted.");
    }
  };

  render() {
    const { user, previewPhoto } = this.state;

    return (
      <div className="profile-container">
        <header className="profile-header">
          <h1>Your Profile</h1>
        </header>

        <div className="profile-card">
          <div className="photo-section">
            <img
              src={previewPhoto || defaultAvatar}
              alt="Profile"
              className="profile-photo"
            />
            <label className="upload-btn">
              Upload Photo
              <input type="file" accept="image/*" onChange={this.handlePhotoUpload} />
            </label>
          </div>

          <div className="info-section">
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={user.bio}
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className="button-row">
              <button className="save-btn" onClick={this.saveChanges}>
                Save Changes
              </button>

              <button className="delete-btn" onClick={this.deleteAccount}>
                Delete Account
              </button>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Your Playlists</h2>
          {user.playlists.length === 0 ? (
            <p>No playlists yet.</p>
          ) : (
            <ul className="list">
              {user.playlists.map((pl, index) => (
                <li key={index}>{pl}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="section">
          <h2>Your Comments</h2>
          {user.comments.length === 0 ? (
            <p>You haven't commented on any songs yet.</p>
          ) : (
            <ul className="list">
              {user.comments.map((c, index) => (
                <li key={index}>{c}</li>
              ))}
            </ul>
          )}
        </div>

        <button className="logout-btn logout-bottom" onClick={this.logout}>
          Log Out
        </button>
      </div>
    );
  }
}
