/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'toastr/build/toastr.min.css';
import './App.css';
import Header from "./components/common/header";

class App extends Component {
  render() {
    return (      
      <div className="App">
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-lg-1">
              <Header />
            </div>
            <div className="col-sm-9 col-lg-11">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col-lg-10 col-lg-offset-1">
                <div className="sub-header">
                  Content                  
                </div>
                {this.props.children}
              </div>
             </div>
          </div>
          
        </div>
      </div>
    );
  }
}



export default App;

