import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastPreview.css";

function WeatherForecastPreview(props) {
  function showHours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return (
      <div>
        <span className="ShowHours">{hours}:00</span>
      </div>
    );
  }

  function showTemperature() {
    let temperature = Math.round(props.data.main.temp);
    return (
      <div>
        <span className="ShowTemperature">{temperature}°C</span>
      </div>
    );
  }

  return (
    <div className="WeatherForecastPreview col">
      {showHours()}
      <span className="ForecastPreview-Icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </span>
      {showTemperature()}
    </div>
  );
}
export default WeatherForecastPreview;
