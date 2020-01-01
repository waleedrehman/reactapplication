import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Permutation from './components/Permutation';
import Greeting from './components/Greeting';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/permutation" component={Permutation} />
          <Route path="/greeting" component={Greeting} />
        </div>
      </Router>
    );
  }
}

export default App;
