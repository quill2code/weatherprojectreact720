import React from "react";

import "./WeatherToday.css";

export default function WeatherToday() {
  return (
    <div className="weather-today">
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <span className="city">Lisbon</span>
          <ul>
            <li>
              <p>Tuesday 27 September at 14:47</p>
            </li>
            <li>
              <p>
                Humidity:{" "}
                <strong>
                  <span className="humidity">63</span>%
                </strong>
                , Wind:{" "}
                <strong>
                  <span className="wind-speed">11.62</span>km/h
                </strong>
              </p>
            </li>
          </ul>
        </div>

        <div className="col-xs-12 col-md-5">
          <div className="weather-right">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              className="icon-today"
            />
            <span className="temperature">22</span>
            <span className="unit">
              <span className="celsiusfar-a">°C</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
