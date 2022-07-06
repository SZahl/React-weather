import React from "react";
import "./WeatherForecastDays.css";
import axios from "axios";

export default function WeatherForecastDays(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "525373dbe56cb579b8861419c129ff7f";
    let long = props.data.coord.lon;
    let lat = props.data.coord.lat
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecastDays">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDays-day">Thu</div>
          <img
            style={{ width: 90 }}
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.weather[0].main}
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span> {" "}
            <span className="WeatherForecast-temperature-min">10°C</span>
          </div>
        </div>
      </div>
    </div>



  );
}
