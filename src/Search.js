import React, { useState } from "react";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      cityName: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f81d9102f55557fbaab58670b27ef077";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <input
                type="search"
                placeholder="Search for a City"
                className="search-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-xs-12 col-sm-5">
              <input type="submit" className="btn" value="Search" />
            </div>
          </div>
        </form>
        <WeatherToday data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
