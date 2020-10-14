/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Flat from './flat';
import flats from '../../data/flats';

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatId: null
    }
  }

  updateSelectedFlat = (flatId) => {
    this.setState({
      selectedFlatId: flatId
    });
  }

  render() {
    return (
      <div className="flat-list">
        {
          flats.map((flat) => {
            return <Flat {...flat} key={flat.id} updateSelectedFlat={this.updateSelectedFlat} selected={flat.id === this.state.selectedFlatId} />;
          })
        }
      </div>
    );
  }
}

export default FlatList;
