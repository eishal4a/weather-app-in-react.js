import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../components/search.png';
import humid_icon from "../components/humid.png";
import wind_icon from '../components/wind.png';
import clear_icon from '../components/clear.png';
import cloud_icon from '../components/cloud.webp'; // Updated to .webp

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": cloud_icon,
    "04n": cloud_icon,
    "09d": cloud_icon,
    "09n": cloud_icon,
    "10d": cloud_icon,
    "10n": cloud_icon,
    "13d": clear_icon, // Use appropriate icons for snow
    "13n": clear_icon,
  };
const apiKey = import.meta.env.VITE_APP_ID;
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      
      // Check if the response is ok (status code 200)
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear_icon; // Default to clear_icon if not found
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Could not fetch weather data. Please check the city name.");
    }
  };

  useEffect(() => {
    search(city); // Fetch weather data for the default city on initial load
  }, []);

  return (
    <div className='weather'>
      <div className="search-bar">
        <input
          type="text"
          placeholder='Search'
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state on input change
        />
        <img
          src={search_icon}
          alt="Search"
          className='search'
          onClick={() => search(city)} // Fetch weather data for the entered city
        />
      </div>
      {weatherData && (
        <>
          <img src={weatherData.icon} alt="Weather Icon" className='sun-icon' />
          <p className='temperature'>{weatherData.temperature}°C</p>
          <p className='location'>{weatherData.location}</p>
          <div className='weather-data'>
            <div className='col'>
              <img src={humid_icon} alt='Humidity Icon' />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className='col'>
              <img src={wind_icon} alt='Wind Icon' />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;