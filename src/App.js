/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/common/header";
import './navbar-fixed-side.css';

class App extends Component {
  render() {
    return (      
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="App col-sm-9 col-lg-10">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;

