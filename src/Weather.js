import "./Weather.css";
import "./styles.css";

import Footer from "./Footer";

export default function Weather() {
  let weatherData = {
    city: "Manchester",
    temperature: "7°C",
    date: "Thursday 10:00",
    description: "Cloudy",
    wind: "10",
    humidity: "20",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <form class="mb-3" />
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" class="btn btn-primary" />
          </div>{" "}
        </div>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="d-flex weather-temperature">
              <div>
                <span className="units" />
                <img src={weatherData.imgUrl} alt="weather logo" />
                <strong>{weatherData.temperature}</strong>
              </div>
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <Footer />
    </div>
  );
}
