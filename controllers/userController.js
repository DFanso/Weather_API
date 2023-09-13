const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const {fetchWeatherByDate} = require('../utils/weatherUtil');

// Validate email
const validateEmail = email => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
};

//create a user
exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password, location } = req.body;

  if (!firstName || !lastName || !email || !password || !location) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: 'Email already exists' });

  const newUser = new User({ firstName, lastName, email, password, location });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created', id: newUser._id });
  } catch (err) {
    res.status(500).json({ message: 'Error saving the user', error: err });
  }
};

//login user 
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });
  
    // Compare hashed password with plaintext password
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) return res.status(400).json({ message: 'Invalid email or password' });
  
    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '6h',
    });
    res.json({ message: 'Logged in', token });
};

//update user
exports.updateUser = async (req, res, next) => {
    const userId = req.userId; // The userId added by the auth middleware
  
    // Build an object containing only the fields that are present in req.body
    const updateFields = {};
    if (req.body.firstName) updateFields.firstName = req.body.firstName;
    if (req.body.lastName) updateFields.lastName = req.body.lastName;
    if (req.body.email) updateFields.email = req.body.email;
    if (req.body.location) updateFields.location = req.body.location;
  
    // Check if updateFields is empty
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updateFields,
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User updated', user: updatedUser });
    } catch (err) {
      next(err);
    }
  };



exports.getWeatherData = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const weatherData = {
      location: user.location,
      weather: user.weather
    };
    res.json(weatherData);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching weather data', error: err });
  }
};


exports.getWeatherDataByDate = async (req, res, next) => {
    const userId = req.userId;
    const date = req.params.date; // assuming date is passed as a URL parameter
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const weatherData = await fetchWeatherByDate(user.location, date);
  
      if (weatherData) {
        res.json(weatherData);
      } else {
        res.status(500).json({ message: 'Could not fetch weather data' });
      }
  
    } catch (err) {
      if (typeof next === 'function') {
        next(err);
      } else {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  };