import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component {
  state = {
    state: 'none'
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </div>
      </Router>
    );
  }
}

export default App;
