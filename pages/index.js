import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const api = {
  key: "d1ee0d43d14637d450d3a16171ddc283",
  base: "https://api.openweathermap.org/data/2.5/",
};

const daysOfWeeks = {
  0: "Thursday",
  1: "Friday",
  2: "Saturday",
};

var icon = "";

const icons = `http://openweathermap.org/img/wn/${icon}@2x.png`;

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toDOW(unix) {
  unix = Number(unix);

  return (unix - 96) % (168 / 24);
}

function getDayDate(str) {
  var Arr = str.split("");

  return Arr[5] + Arr[6] + "-" + Arr[8] + Arr[9];
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const [query5, setQuery5] = useState("");
  const [forecast, setforecast] = useState({});

  const searchCurrent = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
      fetch(`${api.base}forecast?q=${query}&units=imperial&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setforecast(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  {
    typeof weather.main != "undefined"
      ? (icon = `/weathericons/${weather.weather[0].icon}@2x.png`)
      : "";
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <title>World Weather - City Search</title>
      </Head>

      <Layout>
        <div className="text-center mt-5">
          <TextField
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={searchCurrent}
            className="searchbox"
            id="filled-basic"
            label="Enter city name"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon></SearchIcon>
                </InputAdornment>
              ),
            }}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          /*<div className="text-center">
            <h1>{weather.name}</h1>
            <p>{weather.sys.country}</p>
            <p>{Math.round(weather.main.temp)}°F</p>
            <p>{weather.weather[0].main}</p>
          </div>*/
          <div className="current-weather text-center rounded-lg  mt-10 py-6">
            <div className="">
              <h1 className="lighterwhite font-semibold text-2xl">
                {weather.name}, {weather.sys.country} Weather
              </h1>
              <Image width="130" height="130" src={icon}></Image>
            </div>

            <div>
              <h1 className="text-white font-semibold text-6xl">
                {Math.round(weather.main.temp)}°F
              </h1>
              <h1 className="text-white font-semibold text-2xl pt-3">
                {toTitleCase(weather.weather[0].description)}
              </h1>
            </div>
          </div>
        ) : (
          ""
        )}

        {typeof forecast.list != "undefined" ? (
          <div className="forecast py-24">
            <h1 className="text-center font-semibold text-3xl pb-6">
              5 Day Forecast
            </h1>
            <div className="forecast-items flex justify-center">
              <div className="rounded-lg bg-white px-5 pt-5 pb-4 text-center  forecast-item">
                <h1 className="text-xl font-semibold">
                  {getDayDate(forecast.list[6].dt_txt)}
                </h1>
                <h1 className="text-4xl text-blue-600 font-bold">
                  {Math.floor(forecast.list[6].main.temp)}°
                </h1>
                <h1>{Math.floor(forecast.list[4].main.temp)}°</h1>
                <Image
                  width="100"
                  height="100"
                  src={`/weathericons/${forecast.list[6].weather[0].icon}@2x.png`}
                ></Image>

                <h1 className="font-medium">Tomorrow</h1>
              </div>

              <div className="rounded-lg bg-white px-5 pt-5 pb-4 text-center forecast-item">
                <h1 className="text-xl font-semibold">
                  {getDayDate(forecast.list[14].dt_txt)}
                </h1>
                <h1 className="text-4xl text-blue-600 font-bold">
                  {Math.floor(forecast.list[14].main.temp)}°
                </h1>
                <h1>{Math.floor(forecast.list[12].main.temp)}°</h1>
                <Image
                  width="100"
                  height="100"
                  src={`/weathericons/${forecast.list[14].weather[0].icon}@2x.png`}
                ></Image>
              </div>
              <div className="rounded-lg bg-white px-5 pt-5 pb-4 text-center  forecast-item">
                <h1 className="text-xl font-semibold">
                  {getDayDate(forecast.list[22].dt_txt)}
                </h1>
                <h1 className="text-4xl text-blue-600 font-bold">
                  {Math.floor(forecast.list[22].main.temp)}°
                </h1>
                <h1>{Math.floor(forecast.list[20].main.temp)}°</h1>
                <Image
                  width="100"
                  height="100"
                  src={`/weathericons/${forecast.list[22].weather[0].icon}@2x.png`}
                ></Image>
              </div>
              <div className="rounded-lg bg-white px-5 pt-5 pb-4 text-center forecast-item">
                <h1 className="text-xl font-semibold">
                  {getDayDate(forecast.list[30].dt_txt)}
                </h1>
                <h1 className="text-4xl text-blue-600 font-bold">
                  {Math.floor(forecast.list[30].main.temp)}°
                </h1>
                <h1>{Math.floor(forecast.list[28].main.temp)}°</h1>
                <Image
                  width="100"
                  height="100"
                  src={`/weathericons/${forecast.list[30].weather[0].icon}@2x.png`}
                ></Image>
              </div>
              <div className="rounded-lg bg-white px-5 pt-5 pb-4 text-center  forecast-item">
                <h1 className="text-xl font-semibold">
                  {getDayDate(forecast.list[38].dt_txt)}
                </h1>
                <h1 className="text-4xl text-blue-600 font-bold">
                  {Math.floor(forecast.list[38].main.temp)}°
                </h1>
                <h1>{Math.floor(forecast.list[36].main.temp)}°</h1>
                <Image
                  width="100"
                  height="100"
                  src={`/weathericons/${forecast.list[38].weather[0].icon}@2x.png`}
                ></Image>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}
