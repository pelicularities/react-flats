import React, { Component } from 'react';
import FlatList from './flat_list';
import Gmap from './gmap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FlatList />
        <Gmap />
      </div>
    )
  }

}

export default App;
