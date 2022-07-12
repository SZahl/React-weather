import React from "react";

export default function WeatherForecastDayInfo(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max)
        return `${temperature}`;
    }
function minTemp() {
  let temperature = Math.round(props.data.temp.min);
  return `${temperature}`;
}

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

    return (
        <div>
        <div className="WeatherForecastDays-day">{day()}</div>
               <img
                 style={{ width: 90 }}
                 src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                 alt={props.data.weather[0].main}
               />
               <div className="WeatherForecast-temperatures">
                 <span className="WeatherForecast-temperature-max">
                   {maxTemp()}°C
                 </span>{" "}
                 <span className="WeatherForecast-temperature-min">
                   {minTemp()}°C
                 </span>
               </div>
               </div>
    );
}