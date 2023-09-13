const express = require('express');
const { createUser, updateUser, getWeatherData, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//create user
router.post('/', async (req, res, next) => {
  try {
    await createUser(req, res);
  } catch (err) {
    next(err);
  }
});

//update user
router.put('/', authMiddleware, async (req, res, next) => {
    try {
      await updateUser(req, res);
    } catch (err) {
      next(err);
    }
  });

//login user
router.post('/login', async (req, res, next) => {
    try {
      await loginUser(req, res);
    } catch (err) {
      next(err);
    }
  });


router.get('/weather', authMiddleware,async (req, res, next) => {
  try {
    await getWeatherData(req, res);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
