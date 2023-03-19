import React from 'react'
import getDate from './getDate'

const NextFiveDays = ({nextFiveDays}) => {
  return (
    <>
      {
        nextFiveDays?.map((day, index) => {
          const getWeatherDate = getDate(day);
          const [mDay, mDate] = getWeatherDate;

          return (
            <ul key={index} className="next-five-days">
              <li className="date">
                <span>{`${mDay} : ${mDate}`}</span>
              </li>
              <li className="degree">
                <span>{Math.round(day?.main.temp)}&deg;C</span>
              </li>
              <li className="type">
                <figure>
                  <img
                    src={`https://openweathermap.org/img/wn/${day?.weather[0].icon}@2x.png`}
                    alt={day?.weather[0].main}
                  />
                </figure>
                <span>{day?.weather[0].main}</span>
              </li>
            </ul>
          );
        })
      }
    </>
  )
}

export default NextFiveDays