import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(props.celsius)}</span>
        <span className="Units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="FahrenheitLink">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(fahrenheit())}</span>
        <span className="Units">
          <a href="/" onClick={showCelsius} className="CelsiusLink">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
export default WeatherTemperature;
