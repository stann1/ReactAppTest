/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload afdf.
        </p>
        <div className="col-md-4 col-md-offset-4">
          <StoryBox />
          <CommentBox />
        </div>
      </div>
    );
  }
}

class StoryBox extends Component {
  render(){
    const now = new Date();
    const stories = ["React", "JSX", "JavaScript", "Programming"];
    return (
      <div>
        <h3>Stories</h3>
        <p className="lead">Current time: {now.toTimeString()}</p>
        <ul className="list-group">
          { stories.map((s) => <li className="list-group-item">{s}</li>) }
        </ul>
      </div>
    );
  }  
}

class Comment extends Component{

  constructor() {
    super();
    this.state = {
      isAbusive: false
    };
  }

  render() {
    let commentBody;
    if (this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }

    return(
      <div className="comment panel panel-primary">
        <p className="comment-header panel-heading">
          <img src={this.props.avatarUrl} className="img-rounded pull-left"/>
          {this.props.author}
        </p>
        <p className="comment-body panel-body">
          {commentBody}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }

  _toggleAbuse(event){
    event.preventDefault();
    this.setState({isAbusive: !this.state.isAbusive})
  }
}

class CommentBox extends Component {

  constructor(){
    super();

    this.state = {
      showComments: false
    }
  }

  _getComments(){
    const commentList = [
      { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl:'images/default-avatar.png' },
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl:'images/default-avatar.png' }
    ];
    { return commentList.map((c) => <Comment author={c.author} body={c.body} avatarUrl={c.avatarUrl} key={c.id} />)  }
  }

  render(){
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments) {
      commentNodes = <div className="comment-list">{comments}</div>
    };
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <button onClick={this._toggleShowComments.bind(this)}>Show Comments</button>
        <h4 className="comment-count">{comments.length} {comments.length === 1 ? "comment" : "comments"}</h4>
        <div className="comment-list">
          {commentNodes}
        </div>
      </div>
    );
  }

  _toggleShowComments(event){
    event.preventDefault();
    this.setState({showComments: !this.state.showComments})
  }
}

export default App;

