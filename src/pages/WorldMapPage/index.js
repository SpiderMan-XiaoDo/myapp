

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import warehouse from './warehouse.png'

const googleApi = "AIzaSyCSdH0xFG8UxLr6DkIfO_nf9ED6qrndv"

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div className='container'>
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      >
        <Marker
          position={{ lat: 14.058324, lng: 108.277199 }}
          icon={{
            url: warehouse, // Sử dụng hình ảnh marker tùy chỉnh
            scaledSize: new window.google.maps.Size(30, 30) // Kích thước của marker
          }} // Vị trí của đánh dấu
          onClick={() => {
            alert("Dia diem da ping")
          }} // Hành động khi click vào đánh dấu
        />
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: googleApi // Thay YOUR_API_KEY bằng API key của bạn
})(MapContainer);
