import React, { Component } from 'react';

export default class StoryBox extends Component {
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