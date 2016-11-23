import React, { Component } from 'react';
import Comment from './comment';
import CommentForm from './commentForm';
import Store from '../../api/Store';

export default class CommentsPage extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: []
    };
  }

  componentWillMount(){
    this._fetchComments()
  }
  
  render() {
    const comments = this._getComments();
    return(
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />

        {this._getPopularMessage(comments.length)}
        <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _fetchComments() {
    Store.getComments((data) => {
        console.log(data);
        this.setState({comments: data.comments});
        this.setState({showComments: true});
      })
  }
  
  _getPopularMessage(commentCount) {
    const POPULAR_COUNT = 10;
    if (commentCount > POPULAR_COUNT) {
       return (
         <div>This post is getting really popular, don't miss out!</div>
       );
    }
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (<Comment
               id={comment.id}
               author={comment.author}
               body={comment.body}
               avatarUrl={comment.avatarUrl}
               key={comment.id}
               onDelete={this._deleteComment.bind(this)} />);
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }

  _addComment(commentAuthor, commentBody) {
    let comment = {
      id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
      author: commentAuthor,
      body: commentBody,
      avatarUrl: 'images/default-avatar.png'
    };

    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _deleteComment(commentID) {
    const comments = this.state.comments.filter(
      comment => comment.id !== commentID
    );

    this.setState({ comments });
  }
}