import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C|
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round(props.celsius * 1.8 + 32);
    return (
      <span>
        <span className="temperature">{fahrenheit}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
