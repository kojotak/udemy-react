import React, { Component } from 'react';

class Minimap extends Component {

  //lifecycle method from react
  componentDidMount(){

    //create embeded google map
    //1st parameter is reference where google maps should be rendered
    //2nd parameter is configuration for google maps to render
    new google.maps.Map(this.refs.map,{
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render(){
    /* ref ... reference to HTML element, can be referenced as 'this.refs.map' */
    return <div ref="map" />;
  }
}

export default Minimap;
