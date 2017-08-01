import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <nav className="nav">
            <div className="nav-link">
              <Link to="/" className="nav-link">Home</Link>
            </div>
            <div className="nav-link">
              <Link to="/skills" className="nav-link">Skills</Link>
            </div>
            <div className="nav-link">
              <Link to="/projects" className="nav-link">Projects</Link>
            </div>
            <div className="nav-link">
              <Link to="/about" className="nav-link">About</Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
