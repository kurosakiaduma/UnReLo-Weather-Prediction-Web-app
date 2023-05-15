import { useState, useEffect } from "react";
import { FaCloudSun, FaSun, FaCloudRain } from "react-icons/fa";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=1.2921&lon=36.8219&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case "01d":
        return <FaSun />;
      case "01n":
        return <FaSun />;
      case "02d":
        return <FaCloudSun />;
      case "02n":
        return <FaCloudSun />;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <FaCloudSun />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <FaCloudRain />;
      case "11d":
      case "11n":
        return <FaCloudRain />;
      case "13d":
      case "13n":
        return <FaCloudSun />;
      case "50d":
      case "50n":
        return <FaCloudSun />;
      default:
        return <FaCloudSun />;
    }
  };

  const renderWeatherData = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Failed to load weather data.</p>;
    } else {
      const { current, daily } = weatherData;

      return (
        <div className="flex flex-col items-center">
          <div className="my-4">
            <h2 className="text-4xl font-bold">{current.temp}&deg;C</h2>
            <div className="flex items-center">
              <span className="mr-2">
                {getWeatherIcon(current.weather[0].icon)}
              </span>
              <span>{current.weather[0].description}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Max</p>
              <p className="text-lg">{daily[0].temp.max}&deg;C</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Min</p>
              <p className="text-lg">{daily[0].temp.min}&deg;C</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Hum</p>
              <p className="text-lg">{daily[0].humidity}%</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold"> 5 Day forecast</h3>
           <div className="grid grid-cols-5 gap-4 mt-4">
            {daily.slice(1,6).map((day,index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                    <p className="text-lg font-bold">
                        {new Date(day.dt*1000).toLocaleDateString("en-US",{
                            weekday: "short",
                        })}
                    </p>
                    <span>{getWeatherIcon(day.weather[0].icon)}</span>
                    <p className="text-lg">
                        {Math.round(day.temp.max)}° /{""}
                        {Math.round(day.temp.min)}° 
                    </p>
                    </div>
            ))}
            </div>
            </div>
            </div>
      );
      }
    };

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Weather</h1>
            {renderWeatherData()}
        </div>
    );
};

export default Weather;
