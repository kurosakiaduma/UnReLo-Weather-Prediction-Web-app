import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [humidityChartData, setHumidityChartData] = useState(null);
  const [temperatureChartData, setTemperatureChartData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=YOUR_LATITUDE&lon=YOUR_LONGITUDE&exclude=minutely&appid=YOUR_API_KEY&units=metric"
      );
      setWeatherData(response.data);
    };

    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      const humidityData = weatherData.hourly.map((hour) => ({
        x: new Date(hour.dt * 1000),
        y: hour.humidity,
      }));
      setHumidityChartData({
        datasets: [{ label: "Humidity", data: humidityData }],
      });
      const temperatureData = weatherData.hourly.map((hour) => ({
        x: new Date(hour.dt * 1000),
        y: hour.temp,
      }));
      setTemperatureChartData({
        datasets: [{ label: "Temperature", data: temperatureData }],
      });
    }
  }, [weatherData]);

  const renderWeatherData = () => {
    if (weatherData) {
      const hourlyData = weatherData.hourly.map((hour) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString(),
        humidity: hour.humidity,
        temperature: hour.temp,
        soilMoisture: 50,
      }));
      const dailyData = weatherData.daily.slice(1).map((day) => ({
        date: new Date(day.dt * 1000).toLocaleDateString(),
        humidity: day.humidity,
        temperature: day.temp.day,
        soilMoisture: 50,
      }));

      return (
        <div>
          <h2>Hourly Forecast</h2>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Humidity (%)</th>
                <th>Temperature (°C)</th>
                <th>Soil Moisture (%)</th>
              </tr>
            </thead>
            <tbody>
              {hourlyData.map((hour) => (
                <tr key={hour.time}>
                  <td>{hour.time}</td>
                  <td>{hour.humidity}</td>
                  <td>{hour.temperature}</td>
                  <td>{hour.soilMoisture}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>5 Day Forecast</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Humidity (%)</th>
                <th>Temperature (°C)</th>
                <th>Soil Moisture (%)</th>
              </tr>
            </thead>
            <tbody>
              {dailyData.map((day) => (
                <tr key={day.date}>
                  <td>{day.date}</td>
                  <td>{day.humidity}</td>
                  <td>{day.temperature}</td>
                  <td>{day.soilMoisture}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>HumidityChart</h2>
          {humidityChartData && (
            <Line
              data={humidityChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Hourly Humidity",
                  fontSize: 20,
                },
                scales: {
                  xAxes: [
                    {
                      type: "time",
                      time: {
                        unit: "hour",
                      },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          )}
          <h2>Temperature Chart</h2>
          {temperatureChartData && (
            <Line
              data={temperatureChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Hourly Temperature",
                  fontSize: 20,
                },
                scales: {
                  xAxes: [
                    {
                      type: "time",
                      time: {
                        unit: "hour",
                      },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          )}
        </div>
      );
    }

    return <div>Loading weather data...</div>;
  };

  return <div>{renderWeatherData()}</div>;
};

export default WeatherData;
