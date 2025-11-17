import React, { Component } from "react";
import CommentSection from "./CommentSection.jsx";
import CommentBox from "./CommentBox.jsx";
import "./PostCard.css";

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
    this.setState(
      (prev) => ({ likes: prev.likes + 1 }),
      () => {
        this.props.updatePost({
          ...this.props.post,
          likes: this.state.likes,
          comments: this.state.comments,
        });
      }
    );
  };

  toggleComments = () => {
    this.setState((p) => ({ showComments: !p.showComments }));
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
      <div className={`postcard-container ${carousel ? "postcard-carousel" : ""}`}>
        <h2 className="postcard-title">{post.title}</h2>
        <p className="postcard-artist">by {post.artist}</p>

        {post.type === "image" && post.media && (
          <img src={post.media} alt={post.title} className="postcard-media" />
        )}

        {post.type === "video" && post.media && (
          <video src={post.media} controls className="postcard-media"></video>
        )}

        <p className="postcard-text">{post.content}</p>

        <div className="postcard-actions">
          <button onClick={this.toggleLike} className="btn-like">
            Like ({likes})
          </button>

          <button onClick={this.toggleComments} className="btn-comments">
            {showComments
              ? "Hide Comments"
              : `Comments (${comments.length})`}
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
