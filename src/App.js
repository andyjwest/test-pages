import React, { Component } from 'react';
import Aviator from 'aviator';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './header/NavBar.jsx';
import BlogPost from './BlogPost.js';
import categories from './data/categories.json';

class App extends Component {
  render() {
    var routes = {};
    for (var i = categories.length - 1; i >= 0; i--) {
      routes[categories[i].path] = {};
    }
    
    Aviator.setRoutes(routes);

    return (
      <div>
        <NavBar />
        <BlogPost />
      </div>
    );
  }
}

export default App;
