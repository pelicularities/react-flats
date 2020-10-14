/* eslint-disable react/prefer-stateless-function */
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

  render() {
    return (
      <div className="flat-list">
        {
          flats.map((flat) => {
            return <Flat {...flat} />;
          })
        }
      </div>
    );
  }
}

export default FlatList;
