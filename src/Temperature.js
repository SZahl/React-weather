import React, { useState } from "react";

export default function Temperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahr(event) {
    event.preventDefault();
    setUnit("fahr");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        °C |{" "}
        <a href="/" onClick={showFahr}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature">
        <span className="temp">{Math.round(fahrenheitTemp)}</span>
        <a href="/" onClick={showCelsius}>
          °C
        </a>
        | °F
      </div>
    );
  }
}
