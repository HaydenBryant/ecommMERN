import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import M from 'materialize-css';

import Post from "./components/Post";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Navbar />
          <div className="container">
            <Route exact path="/post" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
