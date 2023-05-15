import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import AutoSuggest from 'react-autosuggest';


const Home = () => {
    const [ map, setMap ] = useState(null);
    const [autocompleteService, setAutocomplete ] = useState(null);


    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyB0K6-vbNo4AC2Wbz1b8cF_Y-EqaWuzGg0",
            version: "weekly",
            libraries: ["places"]
        });


    }, [])
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
                zoom: 7.8
            };

            const newMap = new google.maps.Map(document.getElementById("map"), mapOptions);

            //Marker
            const marker = new google.maps.Marker({
                position: {lat: -1.2864, lng: 36.8172},
                map:newMap,
                title: "Nairobi"
            });

            const marker1 = new google.maps.Marker({
                position: {lat: 0.0500, lng:37.6500},
                map:newMap,
                title: "Meru"
            });

            const marker2 = new google.maps.Marker({
                position: {lat: -4.0500, lng:39.6667},
                map:newMap,
                title: "Mombasa"
            });

            const marker3 = new google.maps.Marker({
                position: {lat: -0.1000, lng:34.7500},
                map:newMap,
                title: "Kisumu"
            });

            const marker4 = new google.maps.Marker({
                position: {lat: -0.2833, lng:36.0667},
                map:newMap,
                title: "Nakuru"
            });

            const marker5 = new google.maps.Marker({
                position: {lat: 0.5167, lng:35.2833},
                map:newMap,
                title: "Eldoret"
            });

            const marker6 = new google.maps.Marker({
                position: {lat: -1.5167, lng:37.2667},
                map:newMap,
                title: "Machakos"
            });

            const marker7 = new google.maps.Marker({
                position: {lat: -1.5167, lng:37.2667},
                map:newMap,
                title: "Machakos"
            });

            const marker8 = new google.maps.Marker({
                position: {lat: -0.6698, lng:34.7675},
                map:newMap,
                title: "Kisii"
            });

            const marker9 = new google.maps.Marker({
                position: {lat: 0.3333, lng:34.4833},
                map:newMap,
                title: "Mumias"
            });

            const marker10 = new google.maps.Marker({
                position: {lat: -1.0396, lng:37.0900},
                map:newMap,
                title: "Kiambu"
            });

            const marker11 = new google.maps.Marker({
                position: {lat: -1.5167, lng:37.2667},
                map:newMap,
                title: "Thika"
            });

            const marker12 = new google.maps.Marker({
                position: {lat: -0.4167, lng:36.9500},
                map:newMap,
                title: "Nyeri"
            });

            const marker13 = new google.maps.Marker({
                position: {lat: -0.3596, lng: 34.6400},
                map:newMap,
                title: "Homa Bay"
            });

            const marker14 = new google.maps.Marker({
                position: {lat: 3.1167, lng: 35.6000},
                map:newMap,
                title: "Turkana"
            });

            const marker15 = new google.maps.Marker({
                position: {lat:-1.4500, lng: 36.9833},
                map:newMap,
                title: "Athi River"
            });

            const marker16 = new google.maps.Marker({
                position: {lat: -3.6333, lng: 39.8500},
                map:newMap,
                title: "Kilifi"
            });

            const marker17 = new google.maps.Marker({
                position: {lat: 1.0167, lng: 35.0000},
                map:newMap,
                title: "Kitale"
            });

            const marker18 = new google.maps.Marker({
                position: {lat: 0.5666, lng: 34.5666},
                map:newMap,
                title: "Bungoma"
            });

            const marker19 = new google.maps.Marker({
                position: {lat: -0.5333, lng: 37.4500},
                map:newMap,
                title: "Embu"
            });

            const marker20 = new google.maps.Marker({
                position: {lat: -3.3696, lng: 38.5700},
                map:newMap,
                title: "Voi"
            });

            const marker21 = new google.maps.Marker({
                position: {lat: 1.7500, lng: 40.0667},
                map:newMap,
                title: "Wajir"
            });

            const marker22 = new google.maps.Marker({
                position: {lat: -0.5333, lng: 37.4500 },
                map:newMap,
                title: "Embu"
            });

            const marker23 = new google.maps.Marker({
                position: {lat:-3.3696, lng: 38.5700},
                map:newMap,
                title: "Taita/Taveta"
            });

            const marker24 = new google.maps.Marker({
                position: {lat:-0.5167, lng:34.4500 },
                map:newMap,
                title: "Homa Bay"
            });

            const marker25 = new google.maps.Marker({
                position: {lat: 0.0167, lng: 37.0667},
                map:newMap,
                title: "Laikipia"
            });

            const marker26 = new google.maps.Marker({
                position: {lat: 0.4608, lng: 34.1108 },
                map:newMap,
                title: "Busia"
            });

            const marker27 = new google.maps.Marker({
                position: {lat: 3.9167 , lng: 41.8333 },
                map:newMap,
                title: "Mandera"
            });

            const marker28 = new google.maps.Marker({
                position: {lat: -0.3692 , lng: 35.2839 },
                map:newMap,
                title: "Kericho"
            });

            const marker29 = new google.maps.Marker({
                position: {lat:-1.3667, lng: 38.0167 },
                map:newMap,
                title: "Kitui"
            });

            const marker30 = new google.maps.Marker({
                position: {lat: 1.1000 , lng: 36.7000 },
                map:newMap,
                title: "Samburu"
            });

            const marker31 = new google.maps.Marker({
                position: { lat: -2.2686, lng: 40.9003 },
                map:newMap,
                title: "Lamu"
            });

            const marker32 = new google.maps.Marker({
                position: { lat: 0.200 , lng: 35.100 },
                map:newMap,
                title: "Nandi"
            });

            const marker33 = new google.maps.Marker({
                position: {lat: 2.3333 , lng: 37.9833 },
                map:newMap,
                title: "Marsabit"
            });

            const marker34 = new google.maps.Marker({
                position: {lat: -1.5 , lng: 40.03 },
                map:newMap,
                title: "Tana River"
            });

            const marker35 = new google.maps.Marker({
                position: {lat: -1.1714 , lng: 36.8356},
                map:newMap,
                title: "Kiambu"
            });

            const marker36 = new google.maps.Marker({
                position: {lat: 0.4919, lng: 35.7430 },
                map:newMap,
                title: "Kabarnet"
            });

            const marker37 = new google.maps.Marker({
                position: {lat: -1.0634, lng: 34.4731 },
                map:newMap,
                title: "Migori"
            });

            const marker38 = new google.maps.Marker({
                position: {lat: -0.4989 , lng: 37.2803 },
                map:newMap,
                title: "Kerugoya"
            });

            const marker39 = new google.maps.Marker({
                position: { lat: 0.6703, lng: 35.5081 },
                map:newMap,
                title: "Iten"
            });

            const marker40 = new google.maps.Marker({
                position: {lat: -0.5633 , lng: 34.9358},
                map:newMap,
                title: "Nyamira"
            });

            const marker41 = new google.maps.Marker({
                position: {lat: -0.7210, lng: 37.1526},
                map:newMap,
                title: "Muranga"
            });

            const marker42 = new google.maps.Marker({
                position: {lat: -0.7813, lng: 35.3416 },
                map:newMap,
                title: "Sotik Post"
            });

            const marker43 = new google.maps.Marker({
                position: { lat: 0.0607, lng: 34.2881 },
                map:newMap,
                title: "Siaya"
            });

            const marker44 = new google.maps.Marker({
                position: {lat: 1.2389 , lng: 35.1119 },
                map:newMap,
                title: "Kapenguria"
            });

            const marker45 = new google.maps.Marker({
                position: {lat:-1.7808 , lng: 37.6288 },
                map:newMap,
                title: "Makueni"
            });

            const marker46 = new google.maps.Marker({
                position: {lat: -3.5050 , lng: 38.3772 },
                map:newMap,
                title: "Mwatate"
            });

            const marker47 = new google.maps.Marker({
                position: { lat: -1.85 , lng: 36.7833 }, 
                map:newMap,
                title: "Kajiado"
            });

            const marker48 = new google.maps.Marker({
                position: { lat: -0.2643 , lng: 36.3788 },
                map:newMap,
                title: "Ol Kalou"
            });

            const marker49 = new google.maps.Marker({
                position: { lat: -1.0833, lng: 35.8667 },
                map:newMap,
                title: "Narok"
            });

            const marker50 = new google.maps.Marker({
                position: {lat: -4.1737, lng:39.4521 },
                map:newMap,
                title: "Kwale"
            });

            const marker51 = new google.maps.Marker({
                position: { lat: 0.2725, lng: 36.5381},
                map:newMap,
                title: "Rumuruti"
            });

            setMap(newMap);

        });
    }, []);

    return (
        <div id="map" style={{ height:"1920px", width: "1080px"}}>
        {/* Placeholder for the map*/}
        </div>
    );
};
export default Home;