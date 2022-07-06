import "./App.css";
import Search from "./Search.js";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weathered</h1>
      <Search />
      <div className="Footer">
        Open source coded by Zahl, hosted on{" "}
        <a href="https://github.com/SZahl/React-weather-app">Github</a>
      </div>
    </div>
  );
}