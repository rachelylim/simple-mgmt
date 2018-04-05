import React, { Component } from 'react';

import List from './list';
import SideNav from './side-nav';

class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <List />
      </div>
    );
  }
}

export default App;
