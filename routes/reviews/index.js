const express = require('express');
const router = express.Router();
const { showCreateReviewForm, createReview, getAllReviews } = require('../../controllers/reviews');

// get all reviews
router.get('/', getAllReviews);

// GET Render page with the form to create a new review
router.get('/create', showCreateReviewForm);

// POST Handle the form submission and save the new review
router.post('/create', createReview);


module.exports = router;
