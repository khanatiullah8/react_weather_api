import React from 'react';
import getDate from './getDate';

const WeatherMain = ({today, city}) => {
  const getWeatherDate = getDate(today);
  const [mDay, mDate] = getWeatherDate;

  return (
    <>
      <ul className="weather-main">
        <li className="degree">
          <span>{Math.round(today?.main.temp)}&deg;C</span>
        </li>
        <li className="city">
          <span>{`${city?.name}, ${city?.country}`}</span>
        </li>
        <li className="date">
        <span>{`${mDay} : ${mDate}`}</span>
        </li>
        <li className="type">
          <figure>
            <img
              src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
              alt={today?.weather[0].main}
            />
          </figure>
          <span>{today?.weather[0].main}</span>
        </li>
      </ul>
      <ul className="weather-extra">
        <li className="cloudy">
          <span>cloudy</span>
          <span>{today?.clouds.all}%</span>
        </li>
        <li className="humidity">
          <span>humidity</span>
          <span>{today?.main.humidity}%</span>
        </li>
        <li className="pressure">
          <span>pressure</span>
          <span>{today?.main.pressure}</span>
        </li>
        <li className="wind">
          <span>wind</span>
          <span>{today?.wind.speed}km/h</span>
        </li>
      </ul>
    </>
  )
}

export default WeatherMain;