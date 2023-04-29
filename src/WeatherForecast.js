import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

import "./WeatherForecast.css";

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    //console.log(forecast.list[0].main.temp);
    return (
      <div>
        <span className="WeatherForecastHours">
          The Weather Forecast in every 3 hours:
        </span>
        <div className="WeatherForecast row">
          {forecast.list.slice(0, 6).map(function (forecastItem) {
            return <WeatherForecastPreview data={forecastItem} />;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "6df68f5433f668287bfc545331edd9d1";
    let apiUnit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${apiUnit}`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
export default WeatherForecast;
