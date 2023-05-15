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

      const marker = new google.maps.Marker({
        position: {lat: -1.2864, lng: 36.8172},
        map: map,
        title: "Nairobi"
      });

      marker.addListener("click", () => {
        const temperature = 25;
        const humidity = 70;
        const soilMoisture = 45;
        const location = marker.title;

        const contentString = `
        <div>
        <h1> <b> Sensor Location: ${location}</b> </h1>
          <h2> Temperature: ${temperature}&deg;C </h2>
          <h2> Humidity: ${humidity}% </h2>
          <h2> Soil Moisture: ${soilMoisture}% </h2>
        </div>
        <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
        `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          arialabel: `${marker.title}`,
        });

        window.alert("Map Sensor clicked!");
        infowindow.open({
          anchor: marker,
          map,
        });
      });

      const marker1 = new google.maps.Marker({
        position: {lat: 0.0500, lng:37.6500},
        map: map,
        title: "Meru"
    });

    marker1.addListener("click", () => {
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
      </div>
      <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
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
      position: {lat: -4.0500, lng: 39.6667},
      map: map,
      title: "Mombasa"
    });

    marker2.addListener("click", () => {
      const temperature = 25;
      const humidity = 70;
      const soilMoisture = 45;
      const location = marker.title;

      const contentString = `
      <div>
      <h1> <b> Sensor Location: ${location}</b> </h1>
        <h2> Temperature: ${temperature}&deg;C </h2>
        <h2> Humidity: ${humidity}% </h2>
        <h2> Soil Moisture: ${soilMoisture}% </h2>
      </div>
      <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
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
      position: {lat: -0.1000, lng:34.7500},
      map:newMap,
      title: "Kisumu"
    });

  marker3.addListener("click", () => {
    const temperature = 25;
    const humidity = 70;
    const soilMoisture = 45;
    const location = marker.title;

    const contentString = `
    <div>
    <h1> <b> Sensor Location: ${location}</b> </h1>
      <h2> Temperature: ${temperature}&deg;C </h2>
      <h2> Humidity: ${humidity}% </h2>
      <h2> Soil Moisture: ${soilMoisture}% </h2>
    </div>
    <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
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
    position: {lat: -0.2833, lng:36.0667},
    map:newMap,
    title: "Nakuru"
  });

  marker4.addListener("click", () => {
    const temperature = 25;
    const humidity = 70;
    const soilMoisture = 45;
    const location = marker.title;

    const contentString = `
    <div>
    <h1> <b> Sensor Location: ${location}</b> </h1>
      <h2> Temperature: ${temperature}&deg;C </h2>
      <h2> Humidity: ${humidity}% </h2>
      <h2> Soil Moisture: ${soilMoisture}% </h2>
    </div>
    <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
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

    const marker5 = new google.maps.Marker({
      position: {lat: 0.5167, lng:35.2833},
      map:newMap,
      title: "Eldoret"
    });

    marker5.addListener("click", () => {
      const temperature = 25;
      const humidity = 70;
      const soilMoisture = 45;
      const location = marker.title;
  
      const contentString = `
      <div>
      <h1> <b> Sensor Location: ${location}</b> </h1>
        <h2> Temperature: ${temperature}&deg;C </h2>
        <h2> Humidity: ${humidity}% </h2>
        <h2> Soil Moisture: ${soilMoisture}% </h2>
      </div>
      <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
      `;
  
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        arialabel: `${marker5.title}`,
      });
  
      window.alert("Map Sensor clicked!");
      infowindow.open({
        anchor: marker5,
        map,
      });
      });

      const marker6 = new google.maps.Marker({
        position: {lat: -1.5167, lng:37.2667},
        map:newMap,
        title: "Machakos"
      });

      marker6.addListener("click", () => {
        const temperature = 25;
        const humidity = 70;
        const soilMoisture = 45;
        const location = marker.title;
    
        const contentString = `
        <div>
        <h1> <b> Sensor Location: ${location}</b> </h1>
          <h2> Temperature: ${temperature}&deg;C </h2>
          <h2> Humidity: ${humidity}% </h2>
          <h2> Soil Moisture: ${soilMoisture}% </h2>
        </div>
        <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
        `;
    
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          arialabel: `${marker6.title}`,
        });
    
        window.alert("Map Sensor clicked!");
        infowindow.open({
          anchor: marker6,
          map,
        });
        });

        const marker7 = new google.maps.Marker({
          position: {lat: -1.5167, lng:37.2667},
          map:newMap,
          title: "Machakos"
        });

        marker7.addListener("click", () => {
          const temperature = 25;
          const humidity = 70;
          const soilMoisture = 45;
          const location = marker.title;
      
          const contentString = `
          <div>
          <h1> <b> Sensor Location: ${location}</b> </h1>
            <h2> Temperature: ${temperature}&deg;C </h2>
            <h2> Humidity: ${humidity}% </h2>
            <h2> Soil Moisture: ${soilMoisture}% </h2>
          </div>
          <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
          `;
      
          const infowindow = new google.maps.InfoWindow({
            content: contentString,
            arialabel: `${marker7.title}`,
          });
      
          window.alert("Map Sensor clicked!");
          infowindow.open({
            anchor: marker7,
            map,
          });
          });

          const marker8 = new google.maps.Marker({
            position: {lat: -0.6698, lng:34.7675},
            map:newMap,
            title: "Kisii"
          });

          marker8.addListener("click", () => {
            const temperature = 25;
            const humidity = 70;
            const soilMoisture = 45;
            const location = marker.title;
        
            const contentString = `
            <div>
            <h1> <b> Sensor Location: ${location}</b> </h1>
              <h2> Temperature: ${temperature}&deg;C </h2>
              <h2> Humidity: ${humidity}% </h2>
              <h2> Soil Moisture: ${soilMoisture}% </h2>
            </div>
            <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
            `;
        
            const infowindow = new google.maps.InfoWindow({
              content: contentString,
              arialabel: `${marker8.title}`,
            });
        
            window.alert("Map Sensor clicked!");
            infowindow.open({
              anchor: marker8,
              map,
            });
            });

            const marker9 = new google.maps.Marker({
              position: {lat: 0.3333, lng:34.4833},
              map:newMap,
              title: "Mumias"
          });

          marker9.addListener("click", () => {
            const temperature = 25;
            const humidity = 70;
            const soilMoisture = 45;
            const location = marker.title;
        
            const contentString = `
            <div>
            <h1> <b> Sensor Location: ${location}</b> </h1>
              <h2> Temperature: ${temperature}&deg;C </h2>
              <h2> Humidity: ${humidity}% </h2>
              <h2> Soil Moisture: ${soilMoisture}% </h2>
            </div>
            <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
            `;
        
            const infowindow = new google.maps.InfoWindow({
              content: contentString,
              arialabel: `${marker9.title}`,
            });
        
            window.alert("Map Sensor clicked!");
            infowindow.open({
              anchor: marker9,
              map,
            });
            });

            const marker10 = new google.maps.Marker({
              position: {lat: -1.0396, lng:37.0900},
              map:newMap,
              title: "Kiambu"
            });

            marker10.addListener("click", () => {
              const temperature = 25;
              const humidity = 70;
              const soilMoisture = 45;
              const location = marker.title;
          
              const contentString = `
              <div>
              <h1> <b> Sensor Location: ${location}</b> </h1>
                <h2> Temperature: ${temperature}&deg;C </h2>
                <h2> Humidity: ${humidity}% </h2>
                <h2> Soil Moisture: ${soilMoisture}% </h2>
              </div>
              <a href="https://http://localhost:3000/weatherdata" style="color: blue; text-decoration: underline;">View more stats</a>
              `;
          
              const infowindow = new google.maps.InfoWindow({
                content: contentString,
                arialabel: `${marker10.title}`,
              });
          
              window.alert("Map Sensor clicked!");
              infowindow.open({
                anchor: marker10,
                map,
              });
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
