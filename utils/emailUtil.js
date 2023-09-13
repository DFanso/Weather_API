const nodemailer = require('nodemailer');

exports.sendEmail = async (email,location,weatherData,temperature) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    user: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type:"login",
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  const emailContent = weatherData ? `
  <h2>Weather for ${location || 'Unknown'}, ${weatherData.sys && weatherData.sys.country || 'Unknown'}</h2>
  <ul>
  <li><strong>Temperature:</strong> ${parseFloat(temperature).toFixed(2).replace(/\.00$/, '')}°C </li>
    <li><strong>Weather:</strong> ${weatherData.weather && weatherData.weather[0] ? `${weatherData.weather[0].main} (${weatherData.weather[0].description})` : 'Unknown'}</li>
    <li><strong>Wind Speed:</strong> ${weatherData.wind ? weatherData.wind.speed : 'Unknown'}</li>
  </ul>
` : 'Weather information is not available.';

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'Hourly Weather Update',
    html: emailContent
  };

  await transporter.sendMail(mailOptions);
};

