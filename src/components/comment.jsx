import React, { Component } from 'react';
import CommentConfirmation from './commentConfirmation'

export default class Comment extends Component{
  constructor() {
    super();
    this.state = {
      isAbusive: false
    };
  }

  render() {
    let commentBody;
    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }

    return(
      <div className="comment panel panel-primary">
        <p className="comment-header panel-heading">
          <img src={this.props.avatarUrl} className="img-rounded pull-left" alt='sucks'/>
          {this.props.author}
        </p>
        <p className="comment-body panel-body">
          {commentBody}
        </p>
        <div className="comment-actions">
          <CommentConfirmation onConfirm={this._handleDelete.bind(this)} >Delete comment?</CommentConfirmation>
          <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
        </div>
      </div>
    );
  }

  _toggleAbuse(event){
    event.preventDefault();
    this.setState({isAbusive: !this.state.isAbusive})
  }

  _handleDelete() {
    this.props.onDelete(this.props.id);
  }
}