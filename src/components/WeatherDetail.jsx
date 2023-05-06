import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons'

export default function WeatherDetail({ humidity, wind, style }) {

    return (
        <div className={`weather-details ${style}`}>
            <div className="humidity">
                <i><FontAwesomeIcon icon={faWater} /></i>
                <div className="text">
                    <span>{humidity}%</span>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="wind">
                <i><FontAwesomeIcon icon={faWind} /></i>
                <div className="text">
                    <span>{wind}Km/h</span>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}
