import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useHistory } from "react-router-dom";
import AutoSuggest from 'react-autosuggest';



const Home = () => {
  const [ map, setMap ] = useState(null);
  const [autocompleteService, setAutocomplete ] = useState(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyB0K6-vbNo4AC2Wbz1b8cF_Y-EqaWuzGg0",
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      const google = window.google;
      const mapOptions = {
        center : { lat: -1.3167, lng: 36.8167}, // Center of the Map
        zoom: 9
      };

      const map = new google.maps.Map(document.getElementById("map"), mapOptions);

      //Marker 1
      const temperature = 25;
      const humidity = 70;
      const soilMoisture = 45;

      const contentString = `
      <div>
        <h2>Temperature: ${temperature}&deg;C </h2>
        <h2> Humidity: ${humidity}% </h2>
        <h2> Soil Moisture: ${soilMoisture}% </h2>
      </div>
      `; 
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: `${marker.title}`,
      });

      const marker = new google.maps.Marker({
        position: {lat: -1.2864, lng: 36.8172},
        map: map,
        title: "Nairobi"
      });

      marker.addListener("click", () => {
        window.alert("Map Sensor clicked!");
        infowin
      });

      const marker1 = new google.maps.Marker({
        position: {lat: 0.0500, lng:37.6500},
        map: map,
        title: "Meru"
    });


    marker1.addListener("click", () => {
      window.alert("Map Sensor clicked!");
    });

      const searchBox = new google.maps.places.SearchBox(searchInputRef.current);
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(searchInputRef.current);

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        const place = places[0];
        if (!place.geometry){
          console.log("Returned place contains no geometry");
          return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        }
        else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        // Add marker
        const marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
        });
      });

      setMap(map);
      setAutocomplete(new google.maps.places.AutocompleteService());
    });
  }, []);

  const handleGeolocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map?.setCenter(userLocation);// Use optional chaining operator
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={searchInputRef}
        placeholder="Enter sensor location"
        style={{
            width: "80%",
            maxWidth: "500px",
            height: "40px",
            padding: "10px",
            fontSize: "16px",
            textAlign: "center",
            margin: "0 auto",
            display: "block",
        }}
      />
      <button onClick={() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition ((position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            map?.setCenter(userLocation);
          });
        }
      }}
      >
        Use current location
      </button>
      <div id="map" style={{ height: "1000px", width: "100%" }}></div>
    </div>
  );
};

export default Home;
