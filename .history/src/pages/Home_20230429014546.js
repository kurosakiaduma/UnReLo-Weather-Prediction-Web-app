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

      const marker1 = new google.maps.Marker({
        position: {lat: 0.0500, lng:37.6500},
        map: map,
        title: "Meru"
    });

    const marker2 = new google.maps.Marker({
        position: {lat: -4.0500, lng:39.6667},
        map: map,
        title: "Mombasa"
    });

    const marker3 = new google.maps.Marker({
        position: {lat: -0.1000, lng:34.7500},
        map: map,
        title: "Kisumu"
    });

    const marker4 = new google.maps.Marker({
        position: {lat: -0.2833, lng:36.0667},
        map: map,
        title: "Nakuru"
    });

    const marker5 = new google.maps.Marker({
        position: {lat: 0.5167, lng:35.2833},
        map: map,
        title: "Eldoret"
    });

    const marker6 = new google.maps.Marker({
        position: {lat: -1.5167, lng:37.2667},
        map: map,
        title: "Machakos"
    });

    const marker7 = new google.maps.Marker({
        position: {lat: -1.5167, lng:37.2667},
        map: map,
        title: "Machakos"
    });

    const marker8 = new google.maps.Marker({
        position: {lat: -0.6698, lng:34.7675},
        map: map,
        title: "Kisii"
    });

    const marker9 = new google.maps.Marker({
        position: {lat: 0.3333, lng:34.4833},
        map: map,
        title: "Mumias"
    });

    const marker10 = new google.maps.Marker({
        position: {lat: -1.0396, lng:37.0900},
        map: map,
        title: "Kiambu"
    });

    const marker11 = new google.maps.Marker({
        position: {lat: -1.5167, lng:37.2667},
        map: map,
        title: "Thika"
    });

    const marker12 = new google.maps.Marker({
        position: {lat: -0.4167, lng:36.9500},
        map: map,
        title: "Nyeri"
    });

    const marker13 = new google.maps.Marker({
        position: {lat: -0.3596, lng: 34.6400},
        map: map,
        title: "Homa Bay"
    });

    const marker14 = new google.maps.Marker({
        position: {lat: 3.1167, lng: 35.6000},
        map: map,
        title: "Turkana"
    });

    const marker15 = new google.maps.Marker({
        position: {lat:-1.4500, lng: 36.9833},
        map: map,
        title: "Athi River"
    });

    const marker16 = new google.maps.Marker({
        position: {lat: -3.6333, lng: 39.8500},
        map: map,
        title: "Kilifi"
    });

    const marker17 = new google.maps.Marker({
        position: {lat: 1.0167, lng: 35.0000},
        map: map,
        title: "Kitale"
    });

    const marker18 = new google.maps.Marker({
        position: {lat: 0.5666, lng: 34.5666},
        map: map,
        title: "Bungoma"
    });

    const marker19 = new google.maps.Marker({
        position: {lat: -0.5333, lng: 37.4500},
        map: map,
        title: "Embu"
    });

    const marker20 = new google.maps.Marker({
        position: {lat: -3.3696, lng: 38.5700},
        map: map,
        title: "Voi"
    });

    const marker21 = new google.maps.Marker({
        position: {lat: 1.7500, lng: 40.0667},
        map: map,
        title: "Wajir"
    });

    const marker22 = new google.maps.Marker({
        position: {lat: -0.5333, lng: 37.4500 },
        map: map,
        title: "Embu"
    });

    const marker23 = new google.maps.Marker({
        position: {lat:-3.3696, lng: 38.5700},
        map: map,
        title: "Taita/Taveta"
    });

    const marker24 = new google.maps.Marker({
        position: {lat:-0.5167, lng:34.4500 },
        map: map,
        title: "Homa Bay"
    });

    const marker25 = new google.maps.Marker({
        position: {lat: 0.0167, lng: 37.0667},
        map: map,
        title: "Laikipia"
    });

    const marker26 = new google.maps.Marker({
        position: {lat: 0.4608, lng: 34.1108 },
        map: map,
        title: "Busia"
    });

    const marker27 = new google.maps.Marker({
        position: {lat: 3.9167 , lng: 41.8333 },
        map: map,
        title: "Mandera"
    });

    const marker28 = new google.maps.Marker({
        position: {lat: -0.3692 , lng: 35.2839 },
        map: map,
        title: "Kericho"
    });

    const marker29 = new google.maps.Marker({
        position: {lat:-1.3667, lng: 38.0167 },
        map: map,
        title: "Kitui"
    });

    const marker30 = new google.maps.Marker({
        position: {lat: 1.1000 , lng: 36.7000 },
        map: map,
        title: "Samburu"
    });

    const marker31 = new google.maps.Marker({
        position: { lat: -2.2686, lng: 40.9003 },
        map: map,
        title: "Lamu"
    });

    const marker32 = new google.maps.Marker({
        position: { lat: 0.200 , lng: 35.100 },
        map: map,
        title: "Nandi"
    });

    const marker33 = new google.maps.Marker({
        position: {lat: 2.3333 , lng: 37.9833 },
        map: map,
        title: "Marsabit"
    });

    const marker34 = new google.maps.Marker({
        position: {lat: -1.5 , lng: 40.03 },
        map: map,
        title: "Tana River"
    });

    const marker35 = new google.maps.Marker({
        position: {lat: -1.1714 , lng: 36.8356},
        map: map,
        title: "Kiambu"
    });

    const marker36 = new google.maps.Marker({
        position: {lat: 0.4919, lng: 35.7430 },
        map: map,
        title: "Kabarnet"
    });

    const marker37 = new google.maps.Marker({
        position: {lat: -1.0634, lng: 34.4731 },
        map: map,
        title: "Migori"
    });

    const marker38 = new google.maps.Marker({
        position: {lat: -0.4989 , lng: 37.2803 },
        map: map,
        title: "Kerugoya"
    });

    const marker39 = new google.maps.Marker({
        position: { lat: 0.6703, lng: 35.5081 },
        map: map,
        title: "Iten"
    });

    const marker40 = new google.maps.Marker({
        position: {lat: -0.5633 , lng: 34.9358},
        map: map,
        title: "Nyamira"
    });

    const marker41 = new google.maps.Marker({
        position: {lat: -0.7210, lng: 37.1526},
        map: map,
        title: "Muranga"
    });

    const marker42 = new google.maps.Marker({
        position: {lat: -0.7813, lng: 35.3416 },
        map: map,
        title: "Sotik Post"
    });

    const marker43 = new google.maps.Marker({
        position: { lat: 0.0607, lng: 34.2881 },
        map: map,
        title: "Siaya"
    });

    const marker44 = new google.maps.Marker({
        position: {lat: 1.2389 , lng: 35.1119 },
        map: map,
        title: "Kapenguria"
    });

    const marker45 = new google.maps.Marker({
        position: {lat:-1.7808 , lng: 37.6288 },
        map: map,
        title: "Makueni"
    });

    const marker46 = new google.maps.Marker({
        position: {lat: -3.5050 , lng: 38.3772 },
        map: map,
        title: "Mwatate"
    });

    const marker47 = new google.maps.Marker({
        position: { lat: -1.85 , lng: 36.7833 }, 
        map: map,
        title: "Kajiado"
    });

    const marker48 = new google.maps.Marker({
        position: { lat: -0.2643 , lng: 36.3788 },
        map: map,
        title: "Ol Kalou"
    });

    const marker49 = new google.maps.Marker({
        position: { lat: -1.0833, lng: 35.8667 },
        map: map,
        title: "Narok"
    });

    const marker50 = new google.maps.Marker({
        position: {lat: -4.1737, lng:39.4521 },
        map: map,
        title: "Kwale"
    });

    const marker51 = new google.maps.Marker({
        position: { lat: 0.2725, lng: 36.5381},
        map: map,
        title: "Rumuruti"
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
