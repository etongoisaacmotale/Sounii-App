import React, { Component } from "react";
import "./CommentBox.css";

export default class CommentBox extends Component {
  state = { commentText: "" };

  handleChange = (e) => {
    this.setState({ commentText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { commentText } = this.state;

    if (commentText.trim() === "") return;
    if (this.props.onSubmit) this.props.onSubmit(commentText);

    this.setState({ commentText: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="commentbox-container">
        <input
          type="text"
          value={this.state.commentText}
          onChange={this.handleChange}
          placeholder="Add a comment..."
          className="commentbox-input"
        />
        <button type="submit" className="commentbox-btn">
          Send
        </button>
      </form>
    );
  }
}
