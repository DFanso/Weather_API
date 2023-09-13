const axios = require('axios');
require('dotenv').config();

// Fetch current weather data based on location name
exports.fetchWeather = async (location) => {
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
  return response.data;
};

//Fetch future weather data based on location name and get the weather data for 5 days future
exports.fetchWeatherByDate = async (location, date) => {
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  const currentDate = new Date();
  const targetDate = new Date(date);
  const diffTime = Math.abs(targetDate - currentDate);
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

  // If the target date is within the next 5 days (5 days * 24 hours)
  if (diffHours <= 120) {
    // Fetch latitude and longitude based on location name first
    const coordResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const { lon, lat } = coordResponse.data.coord;

    // Fetch 5-day/3-hour forecast
    const forecastResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const forecasts = forecastResponse.data.list;

    // Find the weather data closest to the target date
    const targetWeather = forecasts.find(forecast => {
      const forecastDate = new Date(forecast.dt * 1000);
      return forecastDate >= targetDate;
    });

    return targetWeather ? targetWeather : 'Weather data for the specified date not found.';
  } else {
    return 'The date specified is beyond 5 days, which is not supported by the 5-day/3-hour forecast API for free users.';
  }
};
