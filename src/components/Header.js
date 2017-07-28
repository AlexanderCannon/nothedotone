import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { findDOMNode } from 'react-dom';

class Header extends Component {
  konamiCodeListner() {
    const pressed = []
    const komaniCode = 'uuddlrlrba';
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          pressed.push('u');
          break;
        case 'ArrowDown':
          pressed.push('d');
          break;
        case 'ArrowLeft':
          pressed.push('l');
          break
        case 'ArrowRight':
          pressed.push('r');
          break;
        default:
          pressed.push(e.key);
          break;
      }
      pressed.splice(-komaniCode.length - 1, pressed.length - komaniCode.length);
      console.log(pressed);
      if (pressed.join('') == komaniCode) {
        let url = 'http://vignette1.wikia.nocookie.net/jurassicpark/images/3/3d/Jurassic-world-lights-sounds-figure-raptor.jpg/revision/latest?cb=20150213221135';
        let raptor = document.createElement("img");
        raptor.src = url;
        raptor.id = 'raptor';
        let root = findDOMNode(this);
        root.appendChild(raptor)
        setTimeout(() => {
          root.removeChild(raptor);
        }, 50000);
      }
    });
  }
  render() {
    this.konamiCodeListner()
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
