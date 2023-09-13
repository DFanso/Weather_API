const cron = require('node-cron');
const { fetchWeather } = require('../utils/weatherUtil');
const { sendEmail } = require('../utils/emailUtil');
const User = require('../models/userModel');

//'0 */3 * * *'
//'*/30 * * * * *'
// Schedule a cron job to send emails every 3 hours
exports.scheduleEmails = () => {
  cron.schedule('*/30 * * * * *', async () => {
    try {
      const users = await User.find({});
  
      for (const user of users) {
        const weatherData = await fetchWeather(user.location);
        const temperature = weatherData.main.temp - 273.15; // Convert Kelvin to Celsius
        await sendEmail(user.email, user.location, weatherData, temperature);
        console.log(`Email sent to ${user.email} successfully!`);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  });
}



//'0 * * * *'
//'*/30 * * * * *'
// Schedule a cron job to run every hour to update users weather Data
exports.updateUserWeather = () => {
    cron.schedule('*/30 * * * * *', async () => {
    
      const users = await User.find({});
    
      for (const user of users) {
        const location = user.location;
    
        // Fetch the weather for that location
        const weatherInfo = await fetchWeather(location);
    
        // Update the weather field in the user schema
        user.weather = {
          temperature: parseFloat(weatherInfo.main ? weatherInfo.main.temp - 273.15 : null).toFixed(2).replace(/\.00$/, ''), // Kelvin to Celsius, remove trailing zeros
          weatherDescription: weatherInfo.weather && weatherInfo.weather[0] ? `${weatherInfo.weather[0].main} (${weatherInfo.weather[0].description})` : null,
          windSpeed: weatherInfo.wind ? weatherInfo.wind.speed : null
        };
        await user.save();
      }
    });
  }
  
