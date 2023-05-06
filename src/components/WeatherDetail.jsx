import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons'

export default function WeatherDetail({ humidity, wind, error }) {

    return (
        <div className='weather-details'>
            <div className="humidity">
                <FontAwesomeIcon icon={faWater} />
                <div className="text">
                    <span>{humidity}%</span>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="wind">
                <FontAwesomeIcon icon={faWind} />
                <div className="text">
                    <span>{wind}Km/h</span>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}
