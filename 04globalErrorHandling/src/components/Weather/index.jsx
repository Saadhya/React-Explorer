import React, { useEffect, useState } from "react";
import { fetchWeather, weatherApi } from "../../config/appApi";
import { useErrorBoundary } from "react-error-boundary";
import ProductCard from "../Products/ProductCard";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  // const [error, setError] = useState(null);
  const { showBoundary, resetBoundary } = useErrorBoundary();

  const fetchData = () => {
    fetchWeather()
      .then((response) => {
        // if (!response.ok) {
        //   console.log(response);
        //   showBoundary(response);
        // }
        console.log(response);
        setWeather(response.list);
      })
      .catch((err) => {
        console.log(err || err.message);
        showBoundary(err || err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, [0]);
  return (
    <div className="p-4 text-center">
      <h1 className="bg-blue-200 p-4 text-3xl">Weather </h1>

      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {weather &&
          weather.map((data, index) => (
            <div key={data.dt}>
              <p className="text-center text-3xl">Clouds: {index + 1}</p>
              <p>temperature: {data.main.temp}</p>
              <p>humidity: {data.main.humidity}</p>
              <p>pressure: {data.main.pressure}</p>
              <p>sea-level: {data.main.sea_level}</p>
              <p>wind-speed: {data.wind.speed}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Weather;
