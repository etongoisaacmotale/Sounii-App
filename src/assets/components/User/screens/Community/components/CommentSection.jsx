import React, { Component } from "react";
import "./CommentSection.css";

export default class CommentSection extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="commentsection-container">
        {comments.map((c) => (
          <div key={c.id} className="commentsection-item">
            <span className="comment-username">{c.user}: </span>
            <span className="comment-text">{c.text}</span>
          </div>
        ))}
      </div>
    );
  }
}
