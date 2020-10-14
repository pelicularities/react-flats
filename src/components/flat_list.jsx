/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-list">
        {
          this.props.flats.map((flat) => {
            return <Flat {...flat} key={flat.id} updateSelectedFlat={this.props.updateSelectedFlat} selected={flat.id === this.props.selectedFlatId} />;
          })
        }
      </div>
    );
  }
}

export default FlatList;
