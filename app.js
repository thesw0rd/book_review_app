const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// set templates
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// form parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const reviewRouter = require('./routes/reviews'); // connecting routes for review
app.use('/reviews', reviewRouter);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// mongodb connection
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// run server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
