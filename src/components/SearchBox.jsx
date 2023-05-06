import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'
import NotFound from "./NotFound"
import WeatherBox from './WeatherBox'
import WeatherDetail from "./WeatherDetail"
export default function SearchBox() {
    const [notFound, setNotFound] = useState(false);
    const [location, setLocation] = new useState("")
    const [temperature, setTemperature] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [style1, setStyle1] = useState('')
    const [style2, setStyle2] = useState('')
    const [style3, setStyle3] = useState('')
    const apiUrl = "/api"
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

                // container.style.height = '400px';
                // weatherBox.style.display = 'none';
                // weatherDetails.style.display = 'none';
                // error404.style.display = 'block';
                // error404.classList.add('fadeIn');
                setStyle1('style1')
                setStyle2('style2')
                setStyle3('style3 fadeIn')
                setNotFound(true)
                setWind('')
                setDescription('')
                setTemperature('')
                setHumidity('')
                setMain('')
                return
            }
            setStyle1('style5')
            setStyle2('fadeIn')
            setStyle3('')
            setWind(data.wind)
            setDescription(data.description)
            setTemperature(data.temperature)
            setHumidity(data.humidity)
            setMain(data.main)
            setNotFound(false)
        }

    }, [data])

    return (
        <div className={`container ${style1}`}>
            <form onSubmit={handleSearch} className="search-box" >
                <i><FontAwesomeIcon icon={faLocationDot} /></i>
                <input
                    type="text"
                    placeholder="Enter your location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    name='city'
                />
                <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} fontSize={"22px"} /></button>
            </form>
            {notFound && <NotFound notFound={notFound} style={style3} />}
            {!notFound && data && <WeatherBox temperature={temperature} description={description} main={main} style={style2} />}
            {!notFound && data && <WeatherDetail humidity={humidity} wind={wind} style={style2} />}
        </div>
    )
}
