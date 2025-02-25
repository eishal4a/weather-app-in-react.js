import React from 'react'
import './Weather.css'
import search_icon from '../components/search.png'
const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="" className='search'/>
      </div>
    </div>
  )
}

export default Weather
