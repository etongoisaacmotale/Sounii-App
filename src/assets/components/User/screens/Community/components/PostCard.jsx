import React, { Component } from "react";
import CommentSection from "./CommentSection.jsx";
import CommentBox from "./CommentBox.jsx";

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes || 0,
      comments: props.post.comments || [],
      showComments: false,
    };
  }

  toggleLike = () => {
    const { likes } = this.state;
    this.setState({ likes: likes + 1 }, () => {
      this.props.updatePost({
        ...this.props.post,
        likes: this.state.likes,
        comments: this.state.comments,
      });
    });
  };

  toggleComments = () => {
    this.setState((prev) => ({ showComments: !prev.showComments }));
  };

  addComment = (text) => {
    const newComment = {
      id: this.state.comments.length + 1,
      user: "You",
      text,
    };
    this.setState(
      (prev) => ({ comments: [...prev.comments, newComment] }),
      () => {
        this.props.updatePost({
          ...this.props.post,
          likes: this.state.likes,
          comments: this.state.comments,
        });
      }
    );
  };

  render() {
    const { post, carousel } = this.props;
    const { likes, comments, showComments } = this.state;

    return (
      <div
        className={`bg-black/70 backdrop-blur-md shadow-lg rounded-lg p-4 text-white ${
          carousel ? "min-w-[300px]" : ""
        }`}
      >
        <h2 className="font-bold text-xl mb-2">{post.title}</h2>
        <p className="text-gray-300 mb-2">by {post.artist}</p>

        {/* Media */}
        {post.type === "image" && post.media && (
          <img
            src={post.media}
            alt={post.title}
            className="w-full h-64 object-cover rounded mb-2"
          />
        )}
        {post.type === "video" && post.media && (
          <video
            src={post.media}
            controls
            className="w-full h-64 rounded mb-2"
          />
        )}

        <p className="mb-2">{post.content}</p>

        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={this.toggleLike}
            className="px-3 py-1 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Like ({likes})
          </button>
          <button
            onClick={this.toggleComments}
            className="px-3 py-1 bg-black/70 text-white rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition-colors"
          >
            {showComments ? "Hide Comments" : `Comments (${comments.length})`}
          </button>
        </div>

        {showComments && (
          <>
            <CommentSection comments={comments} />
            <CommentBox onSubmit={this.addComment} />
          </>
        )}
      </div>
    );
  }
}
