import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
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

      const newMap = new google.maps.Map(document.getElementById("map"), mapOptions);

      const marker = new google.maps.Marker({
        position: {lat: -1.2864, lng: 36.8172},
        map: newMap,
        title: "Nairobi"
      });

      const searchBox = new google.maps.places.SearchBox(searchInputRef.current);
      newMap.controls[google.maps.ControlPosition.TOP_LEFT].push(searchInputRef.current);

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        const place = places[0];
        newMap.setCenter(place.geometry.location);
        new google.maps.Marker({
          position: place.geometry.location,
          map: newMap
        });
      });

      setMap(newMap);
      setAutocomplete(new google.maps.places.AutocompleteService());
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={searchInputRef}
        placeholder="Enter a location"
      />
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default Home;
