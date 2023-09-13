const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(express.json());
app.use(errorMiddleware);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log("Connected to mongoDB"))
.catch((err) => console.error(`Error connecting to mongoDB ${err}`));

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}/`);
});
