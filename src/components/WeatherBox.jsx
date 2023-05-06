import React from 'react'
import clearImage from '../images/clear.png'
import rainImage from '../images/rain.png';
import snowImage from '../images/snow.png';
import cloudImage from '../images/cloud.png';
import mistImage from '../images/mist.png';
import smokeImage from '../images/smoke.png';
export default function WeatherBox({ temperature, description, main, style }) {
  const getImageSrc = (main) => {
    switch (main) {
      case 'Clear':
        return clearImage;
      case 'Rain':
        return rainImage;
      case 'Snow':
        return snowImage;
      case 'Clouds':
        return cloudImage;
      case 'Haze':
        return mistImage;
      case 'Smoke':
        return smokeImage;
      default:
        return '';
    }
  };
  return (
    <div className={`weather-box ${style}`}>
      <img src={getImageSrc(main)} />
      <p className="temperature">{temperature}<span>°C</span></p>
      <p className="description">{description}</p>
    </div>
  )
}
