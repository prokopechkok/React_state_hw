import React, { useState } from "react";

export default function City(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [units, setUnits] = useState("(metric)");

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
    setUnits("(imperial)");
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature));
    setUnits("(metric)");
  }
  return (
    <div class="City">
      It is {temperature} {units}{" "}
      <a href="/" onClick={showCelsius}>
        °C
      </a>{" "}
      |{" "}
      <a href="/" onClick={showFahrenheit}>
        °F
      </a>{" "}
      in {props.name}
    </div>
  );
}
