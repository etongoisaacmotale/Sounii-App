import React, { Component } from "react";

export default class CommentSection extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="mt-2 p-2 border-t border-gray-600">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-2">
            <span className="font-bold text-orange-500">{comment.user}: </span>
            <span className="text-gray-200">{comment.text}</span>
          </div>
        ))}
      </div>
    );
  }
}
