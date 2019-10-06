import React from 'react';
import { getGoogleMaps } from '../../helpers/gmaps-api.js';

class Gmap extends React.Component {
  constructor({address}) {
    super({address});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.address !== this.props.address) {
      getGoogleMaps(this.props.address);
    }
  };

  componentDidMount() {
    getGoogleMaps(this.props.address);
  };

  render() {
    return (
      <div style={{'width': '300px', 'height': '300px'}} id="map"></div>
    );
  };
};

export default Gmap;
