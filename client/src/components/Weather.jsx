import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style/weather.css";

const API_key = "70e0d118a89f4c86bc7161814221005";
// link: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=70e0d118a89f4c86bc7161814221005&q=New York City&aqi=no`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  //   console.log(weather);
  if (weather && weather.current) {
    return (
      <div className="weather">
        <img src={weather.current.condition.icon} alt=""></img>
        <p>
          {/* {weather.current.temp_c}°C/ */}
          {weather.current.temp_f}°F
        </p>
        <p>{weather.current.condition.text}</p>
      </div>
    );
  } else {
    return <h6>Loading realling hard, please wait</h6>;
  }
}

export default Weather;
