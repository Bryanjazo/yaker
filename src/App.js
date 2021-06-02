import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';
import './component/feed.js'
import Feed from './component/feed.js';

class App extends Component {
render(){
  return (
    <div className="App">
      <Feed />
    </div>
    );
  }
}

export default App;
