const axios = require('axios');

const OPENWEATHERMAP_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

async function getWeatherData(location) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
    const response = await axios.get(url);

    return {
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity
    };
  } catch (error) {
    console.error('Weather API Error:', error.message);
    return {
      temperature: 'N/A',
      description: 'Weather data not available',
      humidity: 'N/A'
    };
  }
}

module.exports = { getWeatherData };
