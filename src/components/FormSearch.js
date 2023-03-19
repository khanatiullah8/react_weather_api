import React from 'react';

const FormSearch = ({searchWeather}) => {
  return (
    <>
      <form className="weather-form" onSubmit={(e) => searchWeather(e)}>
        <div className="input-group">
          <input
            type="text"
            name="search"
            className="input-search"
            placeholder="enter city..."
            autoComplete="off"
          />
        </div>
      </form>
    </>
  )
}

export default FormSearch;