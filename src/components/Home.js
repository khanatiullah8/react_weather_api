/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import client from "../clientAxios";
import FormSearch from "./FormSearch";
import WeatherMain from "./WeatherMain";
import NextFiveDays from "./NextFiveDays";

const Home = () => {
  const [today, setToday] = useState();
  const [city, setCity] = useState();
  const [nextFiveDays, setNextFiveDays] = useState();
  const [fetchError, setFetchError] = useState('');

  const imgUrl = `https://openweathermap.org/img/wn`;
  const apiKey = `638ebebf7fbf92a5e76ef37754e0631b`;

  const fetchWeather = async (city) => {
    try {
      const res = await client.get(`?q=${city}&units=metric&appid=${apiKey}`);
      if(res.status === 200) {
        const currentDay = res.data.list[0];
        let filteredDays = [];

        res.data.list.forEach((item, i) => {
          if(i > 0) {
            const compareItem = res.data.list[i-1];
            if(item.dt_txt.slice(0, 10) !== compareItem.dt_txt.slice(0, 10)) {
              filteredDays.push(item)
            }
          }
        })

        setToday(currentDay);
        setCity(res.data.city);
        setNextFiveDays(filteredDays);
      }
    } catch (error) {
      if(error.request.status === 404) {
        setFetchError(error.response.data.message)
      } else if(error.request.status !== 200) {
        setFetchError(error.message)
      }
    }
  };

  useEffect(() => {
    fetchWeather('thane');
  }, [])

  const searchWeather = (e) => {
    e.preventDefault();
    const inputValue = e.target.search.value.trim();
    fetchWeather(inputValue);
    e.target.search.value = '';
    setFetchError('');
  };

  return (
    <>
      <section className="weather">
        <div
          className="wrapper"
          style={{
            backgroundImage: `url(./images/${today?.weather[0].main}.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h2 className="weather-title">React Weather</h2>
          <div className="weather-card">
            <FormSearch searchWeather={searchWeather} />
            {today && city && fetchError === "" ? (
              <WeatherMain today={today} city={city} />
            ) : (
              <h2 style={{ textTransform: "capitalize" }}>{fetchError}</h2>
            )}
          </div>
          <div className="weather-forecast">
            {nextFiveDays && fetchError === "" && (
              <NextFiveDays nextFiveDays={nextFiveDays} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;