import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../components/search.png'
import raincloudsun_icon from '../components/raincloudsun.png'
import humid_icon from "../components/humid.png"
import snowsun_icon from '../components/snowsun.png'
import wind_icon from '../components/wind.png'
import thunder_icon from '../components/thunder.jpg'
import snow_icon from '../components/snow.png'
import sun_icon from '../components/sun.png'
import clear_icon from '../components/clear.png'
const Weather = () => {

  const [weatherData ,setWeatherData] = useState(false),
  const allIcons ={
    "01d":clear_icon,
    "01n":clear_icon,
    "02d":cloud_icon,
    "02d":cloud_icon,
    "03n":cloud_icon,
    "03d":cloud_icon,
    "04d":drizzle_icon,
    "04n":drizzle_icon,
    "09d":rain_icon,
    "09d":rain_icon,
    "10n":rain_icon,
    "10d":rain_icon,
    "13d":snow_icon,
    "13n":snow_icon,
  }
  
  const search =async(city)=>{
    try{
          const url='https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric$appid=${import.meta.env.VITE.APP.ID}',
          const response = await fetch(url);
          const data =await response.json();
          console.log(data);
          const icon 
          setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.main.speed,
            temperature: math.floor(data.main.temp)
            location: data.name
            icon:
          }),
          
    }catch(error){

    }
  }

useEffect(() => {
  search("London"),
}, []),

  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="" className='search'/>
      </div>
      <img src={sun_icon} alt="" className='sun-icon'/>
      <p className='temperature'>16°c</p>
      <p className='location'>London</p>
      <div className='weather-data'>
      <div className='col'>
  <img src={humid_icon} alt='Humidity Icon' />
  <div>
    <p>91%</p>
    <span>Humidity</span>
  </div>
</div>


<div className='col'>
  <img src={wind_icon} alt='Wind Icon' />
  <div>
    <p>3.6 km/h</p>
    <span>Wind Speed</span>
  </div>
</div>


      </div>
    </div>
  )
}

export default Weather
