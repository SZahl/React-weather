import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [text, setText] = useState("");

  function handleResponse(response) {
    let date = new Date(response.data.dt * 1000);

    return setText(
      <div className="Show-weather">
        <div className="Container">
          <div class="row">
            <div class="col-6">
              <ul>
                <li>
                  <div className="City">{response.data.name}</div>
                </li>
                <li>
                  <img
                    src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                    alt={response.data.weather[0].main}
                  />
                  <Temperature celsius={response.data.main.temp} />
                </li>
              </ul>
            </div>

            <div class="col-6">
              <ul>
                <li>
                  <FormattedDate date={date} />
                </li>
                <li>{response.data.weather[0].main} </li>
                <li>Humidity - {response.data.main.humidity}%</li>
                <li>Wind - {Math.round(response.data.wind.speed)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function updateSearch(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95fd2bb0e975bc28910a455e37356508&units=metric`;
    axios.get(url).then(handleResponse);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={updateSearch}
          placeholder="Search for a city"
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{text}</h2>
    </div>
  );
}
