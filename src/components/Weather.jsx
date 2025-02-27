import React, { useEffect } from 'react'
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
  const search =async(city)=>{
    try{
          const url='https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${import.meta.env.VITE.APP.ID}';
          const response = await fetch(url);
          const data =await response.json();
          console.log(data);

    }catch(error){

    }
  }

useEffect(() => {
  search("London");
}, []);

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
