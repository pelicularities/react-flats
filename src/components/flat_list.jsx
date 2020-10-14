import React, { Component } from 'react';
import Flat from './flat';
import flats from '../../data/flats';

class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        this is FlatList
        <Flat {...flats[0]} />
      </div>
    );
  }

}

export default FlatList;
