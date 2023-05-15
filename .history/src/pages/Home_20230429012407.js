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

      const map = new google.maps.Map(document.getElementById("map"), mapOptions);

      const marker = new google.maps.Marker({
        position: {lat: -1.2864, lng: 36.8172},
        map: map,
        title: "Nairobi"
      });

      const searchBox = new google.maps.places.SearchBox(searchInputRef.current);
      map.controls[google.maps.ControlPosition.center].push(searchInputRef.current);

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

        // Center the map on the selected place's geometry location
        map.setCenter(place.geometry.location);
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        }
        else {
          map.setZoom(17);
        }

        //Add geolocation functionality
        if(navigator.geolocation)
        {
          navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
              lat:position.coords.latitude,
              lng: position.coords.longitude,
            };

            map.setCenter(userLocation);
          });
        }

        // Add marker
        const marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
        });
      });

      //Listen for click on autocomplete dropdown suggestion 
      autocompleteService && searchInputRef.current.addEventListener('click', () => {
        const options = {
          input: searchInputRef.current.value,
        };

        autocompleteService.getPlacePredictions(options, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            // Select the first result from the autocomplete dropdown
            const selectedPlace = results[0];
            if (selectedPlace.geometry) {
              // Center the map on the selected place's geometry location
              map.setCenter(selectedPlace.geometry.location);
              if (selectedPlace.geometry.viewport) {
                map.fitBounds(selectedPlace.geometry.viewport);
              }
              else {
                map.setZoom(17);
              }

              // Add marker 
              const marker = new google.maps.Marker({
                position: selectedPlace.geometry.location,
                map: map,
              });
            }
          }
        });
      });

      setMap(map);
      setAutocomplete(new google.maps.places.AutocompleteService());
    });
  }, []);

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
      <div id="map" style={{ height: "1000px", width: "100%" }}></div>
    </div>
  );
};

export default Home;
