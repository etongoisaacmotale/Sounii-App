import React, { Component } from "react";

export default class CommentBox extends Component {
  state = {
    commentText: "",
  };

  handleChange = (e) => {
    this.setState({ commentText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { commentText } = this.state;
    const { onSubmit } = this.props;

    if (commentText.trim() === "") return;

    // Call parent callback
    if (onSubmit) onSubmit(commentText);

    // Clear input
    this.setState({ commentText: "" });
  };

  render() {
    const { commentText } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="mt-2 flex gap-2 items-center"
      >
        <input
          type="text"
          value={commentText}
          onChange={this.handleChange}
          placeholder="Add a comment..."
          className="flex-1 p-2 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Send
        </button>
      </form>
    );
  }
}
