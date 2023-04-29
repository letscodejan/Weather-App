import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function searchCity() {
    const apiKey = "6df68f5433f668287bfc545331edd9d1";
    let apiUnit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  //Search City
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //Geolocation
  function RetrivePosition(position) {
    const apiKey = "6df68f5433f668287bfc545331edd9d1";
    let apiUnit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${apiUnit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(RetrivePosition);
  }
  function handleClick(event) {
    event.preventDefault();
    getCurrentLocation();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="SearchCityButton">
              <button type="submit" className="btn btn-outline-dark">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <div className="CurrentLocationButton col-1">
              <button onClick={handleClick} className="btn btn-outline-light">
                <i className="fas fa-location-arrow"></i>
                {"  "}
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    searchCity();
    return <h3>Loading</h3>;
  }
}
export default Weather;
