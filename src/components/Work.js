import React, { Component } from 'react';

import WorkList from './WorkList';
import WorkDetail from './WorkDetail';

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
