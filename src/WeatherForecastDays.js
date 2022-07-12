import React, { useState, useEffect } from "react";
import "./WeatherForecastDays.css";
import axios from "axios";
import WeatherForecastDayInfo from "./WeatherForecastDayInfo";

export default function WeatherForecastDays(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
  setLoaded(false);
  }, [props.data.coord]);
  

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) { 

       return (
         <div className="WeatherForecastDays">
           <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
              return (
                 <div className="col" key={index}>
               <WeatherForecastDayInfo data={dailyForecast} />
             </div>
              );
              } else {
                return null;
              }
            })}           
           </div>
         </div>
       );
    } else {

    let apiKey = "525373dbe56cb579b8861419c129ff7f";
    let long = props.data.coord.lon;
    let lat = props.data.coord.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}
