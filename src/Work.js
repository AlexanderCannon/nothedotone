import React, { Component } from 'react';

import WorkList from './components/WorkList';
import WorkDetail from './components/WorkDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <WorkList />
        <WorkDetail />
      </div>
    );
  }
}

export default App;
