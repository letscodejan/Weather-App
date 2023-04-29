import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <span className="FormattedDate-css">
        <FormattedDate date={props.data.date} />
      </span>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="city">{props.data.city}</li>
            <li className="text-capitalize">{props.data.description}</li>
            <li className="humidity">Humidity: {props.data.humidity} %</li>
            <li className="wind">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="icon-temp row">
            <div className="icon col-4">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="temp col-8">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
