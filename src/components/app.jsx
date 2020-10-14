import React, { Component } from 'react';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        this is App
        <FlatList />
      </div>
    )
  }

}

export default App;
