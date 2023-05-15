import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import firebase from "firebase/app";

function MyMapComponent() {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [markerData, setMarkerData] = useState(null);

  useEffect(() => {
    const database = firebase.database().ref("/");
    database.on("", (snapshot) => {
      setMarkerData(snapshot.val());
    });
    return () => database.off();
  }, []);

  useEffect(() => {
    if (map && marker) {
      const latLng = new window.google.maps.LatLng(
        markerData.lat,
        markerData.lng
      );
      const marker = new window.google.maps.Marker({
        position: latLng,
        map: map,
        title: markerData.city,
      });
      setMarker(marker);
    }
  }, [map, markerData]);

  useEffect(() => {
    if (map && marker) {
      map.panTo(marker.getPosition());
    }
  }, [map, marker]);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  return (
    <div style={{ height: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB0K6-vbNo4AC2Wbz1b8cF_Y-EqaWuzGg0" }}
        defaultCenter={{ lat: 0.05, lng: 37.65 }}
        defaultZoom={10}
        onGoogleApiLoaded={({ map }) => handleMapLoad(map)}
      />
    </div>
  );
}
export default MyMapComponent;
