import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Home = () => {
  const [markers, setMarkers] = useState([
    { id: 1, lat: 51.5074, lng: -0.1278 },
    { id: 2, lat: 51.5188, lng: -0.0879 },
    { id: 3, lat: 51.5072, lng: -0.0998 },
  ]);

  const handleMarkerClick = (marker) => {
    console.log(`Marker ${marker.id} clicked!`);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={{ lat: 51.5074, lng: -0.1278 }}
        defaultZoom={12}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            lat={marker.lat}
            lng={marker.lng}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ onClick }) => (
  <div
    style={{
      height: 20,
      width: 20,
      borderRadius: '50%',
      backgroundColor: 'red',
      opacity: 0.5,
    }}
    onClick={onClick}
  />
);

export default Home;
