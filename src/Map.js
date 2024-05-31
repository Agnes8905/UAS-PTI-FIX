import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';

import sunny from "./assets/weather/sunny.png";
import clearNight from "./assets/weather/moon.png";
import partlyCloudyDay from "./assets/weather/part-cloud.png";
import partlyCloudyNight from "./assets/weather/cloudy-moon.png";
import cloudy from "./assets/weather/cloudy.png";
import rain from "./assets/weather/rain.png";
import thunderstorm from "./assets/weather/thunderstorm.png";
import mist from "./assets/weather/mist.png";
import defaultIcon from "./assets/weather/default.png";
import snow from "./assets/weather/snow.png";

import "./weather.css"

const apiKey = "eaafd81d8f2c958a4eaf06470f5d756b";
const mapTilerApiKey = "KEwEtXDGDr7EZTgELT0t";

const westJavaCoordinates = { latitude: -6.9344694, longitude: 107.6049539 };
const zoom = 14;

export default function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState("");
  const [latitude, setLatitude] = useState(westJavaCoordinates.latitude);
  const [longitude, setLongitude] = useState(westJavaCoordinates.longitude);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    AnalisisDataCuaca();
  }, []);

  useEffect(() => {
    AnalisisDataCuaca();
  }, [latitude, longitude]);

  const AnalisisDataCuaca = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      setWeather(data);
      fetchForecastData();
    } catch (error) {
      console.error("Error mengakses data cuaca", error);
    }
  };

  const fetchForecastData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );

      const ForecastPerJam = {};
      data.list.forEach((item) => {
        const itemDate = new Date(item.dt_txt);
        const hour = itemDate.getHours();
        if (hour === 6) {
          ForecastPerJam[item.dt_txt] = item;
        }
      });

      const Forecast = Object.values(ForecastPerJam);

      setForecast(Forecast);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  const jabarCities = [
    "Sukabumi",
    "Bandung",
    "Bogor",
    "Depok",
    "Bekasi",
    "Cirebon",
    "Purwakarta",
    "Cianjur",
    "Garut",
    "Ciamis",
    "Tasikmalaya",
    "Kuningan",
    "Majalengka",
    "Sumedang",
    "Indramayu",
    "Subang",
    "Karawang",
    "Bandung Barat",
    "Pangandaran",
    "Cimahi",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      const lowercaseQuery = query.trim().toLowerCase();
      const foundCity = jabarCities.some(
        (city) => city.toLowerCase() === lowercaseQuery
      );
      if (foundCity) {
        await TitikKoordinatKota(query);
      } else {
        alert("Tolong masukkan nama kota / kabupaten yang ada di Jawa Barat");
      }
    } else {
      alert("Silahkan masukkan nama kota / kabupaten yang ada di Jawa Barat");
    }
  };

  const TitikKoordinatKota = async (city) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},ID&appid=${apiKey}`
      );
      const { coord } = data;
      if (coord) {
        const { lat, lon } = coord;
        setLatitude(lat);
        setLongitude(lon);
      } else {
        alert("Coordinates not found for this city.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const SubmitInput = (event) => {
    setQuery(event.target.value);
  };

  const kelvinToCelsius = (temp) => temp - 273.15;

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case "01d":
        return sunny;
      case "01n":
        return clearNight;
      case "02d":
        return partlyCloudyDay;
      case "02n":
        return partlyCloudyNight;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return cloudy;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return rain;
      case "11d":
      case "11n":
        return thunderstorm;
      case "13d":
      case "13n":
        return snow;
      case "50d":
      case "50n":
        return mist;
      default:
        return defaultIcon;
    }
  };

  return (
    <div className="Map text-center flex justify-center flex-wrap overflow-scroll">
      <div className="containerMap flex align-center items-center justify-center flex-wrap w-full md:mt-5">
        <div className="flex w-full justify-center items-center flex-col">
          <div className="current-weather flex justify-center md:my-4 mt-4">
            {weather && (
              <div className="weather w-[90%] p-4 rounded-lg border-4 border-[#9B3922] text-[#481e14] flex justify-center flex-wrap">
                <h2>
                  {weather.name}, {weather.sys.country}
                </h2>
                <div className="weather-info">
                  <img
                    src={getWeatherIcon(weather.weather[0].icon)}
                    alt="Weather Icon" className="current-weather-icon"
                  />
                  <div>{weather.weather[0].main}</div>
                  <div>{Math.round(kelvinToCelsius(weather.main.temp))}°C</div>
                </div>
              </div>
            )}
          </div>
          <form className="md:w-1/2 flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mr-2"
              placeholder="Masukkan Nama Kota"
              value={query}
              onChange={SubmitInput}
            />
            <button type="submit" className="btn btn-primary">Cari</button>
          </form>
        </div>
        <div className="forecast-wrapper flex justify-center flex-wrap">
          <h2 className="forecast-header">Prakiraan Cuaca Selama 5 Hari (Setiap Jam 6 Pagi)</h2>
          <div className="forecast-list flex flex-wrap text-[#803d3b] justify-center w-full gap-2">
            {forecast ? (
              forecast.map((item, index) => (
                <div key={index} className="forecast-item">
                  <div className="inner w-full h-full p-2 flex justify-center items-center flex-wrap">
                    <div className="front w-full flex justify-center items-center">
                      <img
                        src={getWeatherIcon(item.weather[0].icon)}
                        alt="Forecast Weather Icon"
                      />
                    </div>
                    <div className="back w-full flex justify-center items-center">
                      <div className="back-content">
                        <div>
                          {new Date(item.dt_txt).toLocaleDateString()}
                        </div>
                        <div>
                          {Math.round(kelvinToCelsius(item.main.temp))}°C
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading forecast...</p>
            )}
          </div>
        </div>
      </div>
      <iframe
      className="mb-10"
        width="75%"
        height="500"
        src={`https://api.maptiler.com/maps/basic-v2/?key=${mapTilerApiKey}#${zoom}/${latitude}/${longitude}`}
        frameBorder="0"
        style={{ border: "5px solid #9B3922", borderRadius: "10px" }}
      ></iframe>
      <Footer />
    </div>
  );
}
