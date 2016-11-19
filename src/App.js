import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/commentBox'
import StoryBox from './components/storyBox'

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



export default App;

