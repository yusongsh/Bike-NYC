import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <div>
        {weather.forecast.forecastday.map((forecastday) => {
          return (
            <div className="weather-full">
              <img
                src={forecastday.day.condition.icon}
                alt=""
                style={{ width: "50px", padding: "0", margin: "0" }}
              ></img>
              <p style={{ margin: "2px", fontSize: "12px" }}>
                {forecastday.day.condition.text}
              </p>
              <p style={{ margin: "2px", fontSize: "12px" }}>
                Humidity:{forecastday.day.avghumidity}%{" "}
              </p>
              <p style={{ margin: "2px", fontSize: "12px" }}>
                UV Index: {forecastday.day.uv} of 10
              </p>
              <p style={{ margin: "2px", fontSize: "12px" }}>
                Sunrise: {forecastday.astro.sunrise}{" "}
              </p>
              <p style={{ margin: "2px", fontSize: "12px" }}>
                Sunset: {forecastday.astro.sunset}
              </p>
              <h5>{forecastday.date}</h5>
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
