import axios from "axios";
import "./styles/WeatherCard.css";
import Alert from "./Alert";
import { imageMap } from "../utils/Images";
("../utils/Images.js");

const WeatherCard = ({
  weather,
  temps,
  isCelsius,
  changeUnitTemp,
  handleSubmit,
  showAlert,
}) => {
  return (
    <section>
      <h1 className="Card__title">Weather App</h1>

      <div className="container__searcher">
        <form onSubmit={handleSubmit} className="container-input-logo">
          <input
            id="nameCountry"
            type="text"
            className="input-searcher"
            placeholder="City"
          />
          <button className="container__btn">Search</button>
        </form>
        {showAlert && <Alert />}
      </div>
      <div className="Card__container">
        <h2 className="Card__countryName">
          {weather?.name}, {weather?.sys.country}
        </h2>
        <div className="Card__img">
          <img src={imageMap[weather?.weather[0].icon]} alt="icon weather" />
          {/* <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt="icon weather"
          /> */}
        </div>
        <h3 className="Card__temperature">
          {isCelsius ? temps?.celsius + " °c" : temps?.fahrenheit + " °k"}{" "}
        </h3>
        <div>
          <ul className="Card__items">
            <li className="Card__description">
              {weather?.weather[0].main}, {weather?.weather[0].description}
            </li>
            <li>
              <span>Wind Speed: </span>
              {weather?.wind.speed} m/seg
            </li>
            <li>
              <span>Clouds: </span>
              {weather?.clouds.all} %
            </li>
            <li>
              <span>Pressure: </span>
              {weather?.main.pressure} hPa
            </li>
          </ul>
        </div>
        <button className="Card__btn" onClick={changeUnitTemp}>
          &deg;C/&deg;F
        </button>
      </div>
    </section>
  );
};

export default WeatherCard;
