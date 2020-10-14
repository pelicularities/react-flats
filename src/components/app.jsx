import React, { Component } from 'react';
import FlatList from './flat_list';
import Gmap from './gmap';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatId: null,
      flats
    }
  }

  updateSelectedFlat = (flatId) => {
    const selectedFlat = flats.find(({ id }) => id === flatId);
    this.setState({
      selectedFlatId: flatId,
      selectedFlatLat: selectedFlat.lat,
      selectedFlatLng: selectedFlat.lng
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectedFlatId={this.state.selectedFlatId} updateSelectedFlat={this.updateSelectedFlat} />
        <Gmap selectedFlatId={this.state.selectedFlatId} selectedFlatLat={this.state.selectedFlatLat} selectedFlatLng={this.state.selectedFlatLng} />
      </div>
    )
  }

}

export default App;
