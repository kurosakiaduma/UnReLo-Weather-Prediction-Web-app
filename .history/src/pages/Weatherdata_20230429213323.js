import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getWeatherData } from "./api"; // function that retrieves weather data from an API

const WeatherData = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWeatherData(location).then((data) => {
      setWeatherData(data);
      setLoading(false);
    });
  }, [location]);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (!weatherData) {
    return <div>Could not retrieve weather data for {location}.</div>;
  }

  const { temperature, humidity, soilMoisture } = weatherData;
  const temperatureData = {
    labels: weatherData.timestamps,
    datasets: [
      {
        label: "Temperature (Celsius)",
        data: weatherData.temperatureData,
        fill: false,
        borderColor: "#4bc0c0",
      },
    ],
  };
  const humidityData = {
    labels: weatherData.timestamps,
    datasets: [
      {
        label: "Humidity (%)",
        data: weatherData.humidityData,
        fill: false,
        borderColor: "#565656",
      },
    ],
  };

  return (
    <div>
      <h2>{location} Weather</h2>
      <div>
        <div>
          <div>Temperature: {temperature} Celsius</div>
          <div>Humidity: {humidity}%</div>
          <div>Soil Moisture: {soilMoisture}</div>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
            alt="weather icon"
          />
          <div>{weatherData.description}</div>
        </div>
      </div>
      <div>
        <h3>Temperature Trend</h3>
        <Line data={temperatureData} />
      </div>
      <div>
        <h3>Humidity Trend</h3>
        <Line data={humidityData} />
      </div>
    </div>
  );
};

export default WeatherData;
