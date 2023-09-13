const nodemailer = require('nodemailer');

exports.sendEmail = async (email, weatherInfo) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'Hourly Weather Update',
    text: `Weather info: ${JSON.stringify(weatherInfo)}`
  };

  await transporter.sendMail(mailOptions);
};