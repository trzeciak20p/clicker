import React from 'react';

export default function Weather({weatherData}) {
  


  return (
   <div>
      <h3>Weather</h3>
        {weatherData != null ?
        <p>
          <ul>
            <li>miasto: Warszawa</li>
            <li>temperatura: {weatherData.temperature_2m}C</li>
            <li>prędkość wiatru: {weatherData.wind_speed_10m}km/h</li>
            <li>wilgotność: {weatherData.relative_humidity_2m}%</li>
          </ul>
        </p>
        : <span className="d-block w-100 text-center mt-2">No data found</span>}
    </div> 
  );
}
