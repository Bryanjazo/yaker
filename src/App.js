import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './App.css';
import './component/feed.js'
import Feed from './component/feed.js';

class App extends Component {
render(){
  return (
    <Router>
      <Switch>
    <div className="App">
      <Route path='/'><Feed/></Route>

    </div>
      </Switch>
    </Router>
    );
  }
}

export default App;
