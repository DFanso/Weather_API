const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const { sendEmail } = require('./utils/emailUtil');
const User = require('./models/userModel');
const { fetchWeather } = require('./utils/weatherUtil');
require('dotenv').config();
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes');

//cornJob to send current weather to users who are registered in the database every 3 hours
//'0 */3 * * *'
//30s */30 * * * * *
cron.schedule('0 */3 * * *', async () => {
  try {
    const users = await User.find({});

    for (const user of users) {
      const weatherData = await fetchWeather(user.location);
      const temperature = weatherData.main.temp - 273.15; // Convert Kelvin to Celsius
      await sendEmail(user.email, user.location,weatherData,temperature);
      console.log(`Email sent to ${user.email} successfully!`);
    }
  } catch (error) {
    console.log('Error:', error);
  }
});


const app = express();
app.use(express.json());
app.use(errorMiddleware);

//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log("Connected to mongoDB"))
.catch((err) => console.error(`Error connecting to mongoDB ${err}`));

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}/`);
});


