import React from 'react'
import './Weather.css'
import search_icon from '../components/search.png'
import raincloudsun from '../components/raincloudsun.png'
import humid from '../components/humid.jpg'
import snowsun_icon from '../components/snowsun.png'
import wind_icon from '../components/wind.png'
import thuder_icon from '../components/thunder.png'
import snow_icon from '../components/snow.png'
import sun_icon from '../components/sun.png'
import clear_icon from '../components/clear.png'
const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="" className='search'/>
      </div>
      <img src={clear_icon} alt="" className='weather-icon'/>
      <p className='temperature'>16°c</p>
      <p className='location'>London</p>
    </div>
  )
}

export default Weather
