import "./App.css";
import Search from "./Search.js";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <a href="https://github.com/SZahl/React-weather-app">
        Open source code on Github
      </a>
    </div>
  );
}
