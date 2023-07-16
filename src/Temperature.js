import React, { useState } from "react";

export default function WeatherTemperature(props) {
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
      <div className="section-city-temperature">
        <div className="temperature">
          {" "}
          {Math.round(props.celsius)}
          <div className="celsius-fahrenheit">
            {" "}
            °C |
            <a href="/" onClick={convertToFahrenheit}>
              °F{" "}
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5) + 32;
    return (
      <div className="row section-city-temperature">
        <div className="temperature">
          {" "}
          {Math.round(fahrenheit)}
          <div className="celsius-fahrenheit">
            <a href="/" onClick={convertToCelsius}>
              {" "}
              °C
            </a>
            | °F
          </div>
        </div>
      </div>
    );
  }
}