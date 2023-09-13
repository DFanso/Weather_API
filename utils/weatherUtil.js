const axios = require('axios');

exports.fetchWeather = async (location) => {
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
  return response.data;
};
