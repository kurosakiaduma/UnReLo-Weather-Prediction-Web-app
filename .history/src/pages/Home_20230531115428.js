import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import "firebase/app";
import sensorOne from "../Sensorstats/sensorOne";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AutoSuggest from "react-autosuggest";

const Home = () => {
  const [map, setMap] = useState(null);
  const [sensoData, setSensorData] = useState([]);
  const [autocompleteService, setAutocomplete] = useState(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Map loader
    const loader = new Loader({
      apiKey: "AIzaSyB0K6-vbNo4AC2Wbz1b8cF_Y-EqaWuzGg0",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const google = window.google;
      const mapOptions = {
        center: { lat: -1.3167, lng: 36.8167 }, // Center of the Map
        zoom: 9,
      };

      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      const marker1 = new google.maps.Marker({
        position: { lat: 0.148047, lng: 34.622812 },
        map: map,
        title: "Kisumu",
      });

      marker1.addListener("click", () => {
        const temperature = 20.39;
        const humidity = 69;
        const location = marker1.title;

        const contentString = `
        <div>
        <h1> <b> Sensor Location: ${location}</b> </h1>
          <h2> Temperature: ${temperature}&deg;C </h2>
          <h2> Humidity: ${humidity}% </h2>
          <h2> Soil Moisture: ${soilMoisture}% </h2>
        <a href="http://localhost:3000/weatherdata" style="color:blue; text-decoration:underline">
        View more stats
        </a>
        </div>
        `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          arialabel: `${marker1.title}`,
        });

        window.alert("Map Sensor clicked!");
        infowindow.open({
          anchor: marker1,
          map,
        });
      });

      const marker2 = new google.maps.Marker({
        position: { lat: 0.403891, lng: 36.965727 },
        map: map,
        title: "Nyeri",
      });

      marker2.addListener("click", () => {
        const temperature = 25;
        const humidity = 70;
        const soilMoisture = 45;
        const location = marker1.title;

        const contentString = `
      <div>
      <h1> <b> Sensor Location: ${location}</b> </h1>
        <h2> Temperature: ${temperature}&deg;C </h2>
        <h2> Humidity: ${humidity}% </h2>
        <h2> Soil Moisture: ${soilMoisture}% </h2>
        <a href="http://localhost:3000/weatherdata" style="color:blue; text-decoration:underline;">View more stats</a>
      </div>
      `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          arialabel: `${marker2.title}`,
        });

        window.alert("Map Sensor clicked!");
        infowindow.open({
          anchor: marker2,
          map,
        });
      });

      const marker3 = new google.maps.Marker({
        position: { lat: 0.29, lng: 36.17 },
        map: map,
        title: "Nakuru",
      });

      marker3.addListener("click", () => {
        const temperature = 25;
        const humidity = 70;
        const soilMoisture = 45;
        const location = marker2.title;

        const contentString = `
      <div>
      <h1> <b> Sensor Location: ${location}</b> </h1>
        <h2> Temperature: ${temperature}&deg;C </h2>
        <h2> Humidity: ${humidity}% </h2>
        <h2> Soil Moisture: ${soilMoisture}% </h2>
      </div>
      <a href="http://localhost:3000/weatherdata" style="color:blue; text-decoration:underline;">View more stats</a>
      `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          arialabel: `${marker3.title}`,
        });

        window.alert("Map Sensor clicked!");
        infowindow.open({
          anchor: marker3,
          map,
        });
      });

      const marker4 = new google.maps.Marker({
        position: { lat: 3.193, lng: 35.675 },
        map,
        title: "Turkana",
      });

      marker4.addListener("click", () => {
        const temperature = 25;
        const humidity = 70;
        const soilMoisture = 45;
        const location = marker3.title;

        const contentString = `
    <div>
    <h1> <b> Sensor Location: ${location}</b> </h1>
      <h2> Temperature: ${temperature}&deg;C </h2>
      <h2> Humidity: ${humidity}% </h2>
      <h2> Soil Moisture: ${soilMoisture}% </h2>
    </div>
    <a href="http://localhost:3000/weatherdata" style="color:blue; text-decoration:underline;">View more stats</a>
    `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          arialabel: `${marker4.title}`,
        });

        window.alert("Map Sensor clicked!");
        infowindow.open({
          anchor: marker4,
          map,
        });
      });

      const searchBox = new google.maps.places.SearchBox(
        searchInputRef.current
      );
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        searchInputRef.current
      );

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        const place = places[0];
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
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
        map?.setCenter(userLocation); // Use optional chaining operator
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
      <button
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
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
