import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'
import NotFound from "./NotFound"
import WeatherBox from './WeatherBox'
import WeatherDetail from "./WeatherDetail"
import './SearchBox.css'
export default function SearchBox() {
    const [notFound, setNotFound] = useState(false);
    const [location, setLocation] = new useState("")
    const [temperature, setTemperature] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const apiUrl = "http://127.0.0.1:8000/"
    const { postData, data } = useFetch(apiUrl, 'POST')
    const handleSearch = async (e) => {
        e.preventDefault()
        postData({ city: location })
        if (location === '') {
            return;
        }
    }
    useEffect(() => {
        console.log(data)
        if (data) {
            if (data.cod === '404') {
                setNotFound(true)
                setWind('')
                setDescription('')
                setTemperature('')
                setHumidity('')
                setMain('')
                return
            }
            setWind(data.wind)
            setDescription(data.description)
            setTemperature(data.temperature)
            setHumidity(data.humidity)
            setMain(data.main)
            setNotFound(false)
        }

    }, [data])

    return (
        <div className="container" style={{ margin: "auto" }}>
            <form onSubmit={handleSearch} >
                <FontAwesomeIcon icon={faLocationDot} />
                <input
                    type="text"
                    placeholder="Enter your location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    name='city'
                />
                <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            {notFound && <NotFound notFound={notFound} />}
            {!notFound && data && <WeatherBox temperature={temperature} description={description} main={main} />}
            {!notFound && data && <WeatherDetail humidity={humidity} wind={wind} />}
        </div>
    )
}
