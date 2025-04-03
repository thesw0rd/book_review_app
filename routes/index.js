const express = require('express');
const router = express.Router();
const { getHomePage, getReviewsPage } = require('../controllers/index');
const reviewRoutes = require('./reviews');

// main page
router.get('/', getHomePage);

// page with reviews
router.use('/reviews', reviewRoutes);

module.exports = router;
