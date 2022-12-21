import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style/weatherfull.css";

// link: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const loadWeather = async () => {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=70e0d118a89f4c86bc7161814221005&q=New York City&days=5&aqi=yes&alerts=no
        `
      );
      setWeather(res.data);
    };
    loadWeather();
  }, []);
  console.log(weather);

  if (weather && weather.current && weather.forecast) {
    return (
      <div className="weather-full-container">
        {weather.forecast.forecastday.map((forecastday) => {
          return (
            <div className="weather-full">
              <div className="weather-full-row1">
                <div className="weather-ful-row1-left">
                  <img src={forecastday.day.condition.icon} alt="" />
                </div>
                <div className="weather-ful-row1-right">
                  <p className="weather-condition">
                    {forecastday.day.condition.text}
                  </p>
                  <p>
                    <span style={{ fontWeight: "400" }}>Humidity:</span>
                    {forecastday.day.avghumidity}%{" "}
                  </p>
                  <p>
                    <span style={{ fontWeight: "400" }}>UV Index:</span>{" "}
                    {forecastday.day.uv} of 10
                  </p>
                  <p>
                    <span style={{ fontWeight: "400" }}>Sunrise: </span>
                    {forecastday.astro.sunrise}{" "}
                  </p>
                  <p>
                    <span style={{ fontWeight: "400" }}>Sunset: </span>
                    {forecastday.astro.sunset}
                  </p>
                </div>
              </div>
              <div className="weather-full-row2">
                <h5>{forecastday.date}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h6>Loading realling hard, please wait</h6>;
  }
}

export default Weather;
