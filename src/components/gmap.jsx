import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8566,
      lng: 2.3522
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.google_maps_api_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={48.8566}
            lng={2.3522}
          />
        </GoogleMapReact>
      </div>
    );
  }

}

export default Gmap;
