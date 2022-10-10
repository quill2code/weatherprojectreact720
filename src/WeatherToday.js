import React from "react";

import "./WeatherToday.css";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherToday(props) {
  return (
    <div className="weather-today">
      <div className="row">
        <div className="col-sm-6">
          <span className="city">{props.data.cityName}</span>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <p>
                Humidity:{" "}
                <strong>
                  <span className="humidity">{props.data.humidity}</span>%
                </strong>
                , Wind:{" "}
                <strong>
                  <span className="wind-speed">{props.data.wind}</span>
                  km/h
                </strong>
              </p>
            </li>
          </ul>
        </div>

        <div className="col-sm-6">
          <div className="d-flex justify-content-end">
            <img
              src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt="Weather icon"
              className="icon-today"
            />
            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
