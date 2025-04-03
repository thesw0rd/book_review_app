const express = require('express');
const router = express.Router();
const { showCreateReviewForm, createReview, getAllReviews, showEditReviewForm, updateReview, deleteReview } = require('../../controllers/reviews');

// get all reviews
router.get('/', getAllReviews);

// render page with the form to create a new review
router.get('/create', showCreateReviewForm);

// handle CREATE review
router.post('/create', createReview);

// show form to edit an existing review
router.get('/update/:id', showEditReviewForm);

// handle UPDATE review
router.post('/update/:id', updateReview);

// DELETE review
router.post('/delete/:id', deleteReview);

module.exports = router;
