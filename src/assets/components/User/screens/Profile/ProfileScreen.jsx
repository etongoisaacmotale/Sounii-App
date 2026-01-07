import React, { Component } from "react";
import defaultAvatar from "../../assets/images/avatar.png";
import "./profile.css";
/* ---------------------------------------------------
CUSTOM ALERT
----------------------------------------------------*/
const CustomAlert = ({ type, message }) => {
  if (!message) return null;
  return (
    <div className={`custom-alert ${type}`}>
      <span className="alert-icon">!</span>
      <span className="alert-text">{message}</span>
    </div>
  );
};
/* ---------------------------------------------------
CONFIRM ACTION MODAL (Delete / Logout)
----------------------------------------------------*/
const ConfirmModal = ({ title, text, onCancel, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-title">{title}</div>
        <div className="modal-text">{text}</div>
        <div className="modal-buttons">
          <button className="modal-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="modal-confirm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
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
      alertType: "",
      alertMessage: "",
      showModal: false,
      confirmAction: null, // "delete" | "logout"
      originalUser: { ...safeUser }, // to compare changes
    };
  }
  showAlert = (type, message) => {
    this.setState({ alertType: type, alertMessage: message });
    setTimeout(() => {
      this.setState({ alertMessage: "" });
    }, 3000);
  };
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
      this.showAlert("success", "Profile photo updated.");
      this.setState({ originalUser: { ...updatedUser } });
    };
    reader.readAsDataURL(file);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value },
    });
  };
  validateForm = () => {
    const { username, email, phone, password } = this.state.user;
    if (!username.trim()) {
      this.showAlert("error", "Username cannot be empty.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showAlert("error", "Invalid email address.");
      return false;
    }
    const phoneRegex = /^[0-9]{7,15}$/; // basic phone validation
    if (phone && !phoneRegex.test(phone)) {
      this.showAlert("error", "Invalid phone number.");
      return false;
    }
    if (password && password.length < 6) {
      this.showAlert("error", "Password must be at least 6 characters.");
      return false;
    }
    return true;
  };
  saveChanges = () => {
    const { user, originalUser } = this.state;
    if (!this.validateForm()) return;
    // check if there are any changes
    const hasChanges = Object.keys(user).some(
      (key) => JSON.stringify(user[key]) !== JSON.stringify(originalUser[key])
    );
    if (!hasChanges) {
      this.showAlert("info", "No changes detected.");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({ originalUser: { ...user } });
    this.showAlert("success", "Profile updated successfully.");
  };
  requestDeleteAccount = () => {
    this.setState({ showModal: true, confirmAction: "delete" });
  };
  requestLogout = () => {
    this.setState({ showModal: true, confirmAction: "logout" });
  };
  confirmAction = () => {
    const { confirmAction } = this.state;
    if (confirmAction === "delete") {
      localStorage.removeItem("user");
      this.showAlert("error", "Account deleted.");
    }
    if (confirmAction === "logout") {
      this.showAlert("info", "Logged out.");
    }
    this.setState({ showModal: false, confirmAction: null });
  };
  render() {
    const {
      user,
      previewPhoto,
      alertType,
      alertMessage,
      showModal,
      confirmAction,
    } = this.state;
    return (
      <div className="profile-container">
        <CustomAlert type={alertType} message={alertMessage} />
        {showModal && (
          <ConfirmModal
            title={
              confirmAction === "delete"
                ? "Delete Account?"
                : "Log Out?"
            }
            text={
              confirmAction === "delete"
                ? "This action is permanent and cannot be undone."
                : "You will be logged out of your account."
            }
            onCancel={() =>
              this.setState({ showModal: false, confirmAction: null })
            }
            onConfirm={this.confirmAction}
          />
        )}
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
              <input
                type="file"
                accept="image/*"
                onChange={this.handlePhotoUpload}
              />
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
              />
            </div>
            <div className="button-row">
              <button className="save-btn" onClick={this.saveChanges}>
                Save Changes
              </button>
              <button
                className="delete-btn"
                onClick={this.requestDeleteAccount}
              >
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
        <button
          className="logout-btn logout-bottom"
          onClick={this.requestLogout}
        >
          Log Out
        </button>
      </div>
    );
  }
}