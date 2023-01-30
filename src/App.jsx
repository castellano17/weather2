import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

const API_KEY = "0e98db3fe73bb5a1e8953357960dfa34";

function App() {
  const [coord, setCoord] = useState();
  const [weather, setWeather] = useState();
  const [temps, setTemps] = useState();
  const [isCelsius, setIsCelsius] = useState(true);

  const success = (e) => {
    const newCoords = {
      lat: e.coords.latitude,
      lon: e.coords.longitude,
    };
    setCoord(newCoords);
  };

  const changeUnitTemp = () => setIsCelsius(!isCelsius);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coord) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`;
      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          const celsius = (res.data.main.temp - 273.15).toFixed(2);
          const fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);
          const newTemps = {
            celsius,
            fahrenheit,
          };
          setTemps(newTemps);
        })
        .catch((err) => console.log(err));
    }
  }, [coord]);
  return (
    <div className="App backgroud__image">
      {weather ? (
        <WeatherCard
          weather={weather}
          temps={temps}
          isCelsius={isCelsius}
          changeUnitTemp={changeUnitTemp}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
