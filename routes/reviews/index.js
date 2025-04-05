const express = require('express');
const router = express.Router();
const {
  showCreateReviewForm,
  createReview,
  getAllReviews,
  showEditReviewForm,
  updateReview,
  deleteReview
} = require('../../controllers/reviews');

const { reviewValidationRules } = require('../../validators/reviewValidators');
const validate = require('../../middlewares/validate');

// GET all reviews
router.get('/', getAllReviews);

// SHOW create form
router.get('/create', showCreateReviewForm);

// HANDLE CREATE review (with validation)
router.post('/api/create', reviewValidationRules, validate, createReview);

// SHOW edit form
router.get('/update/:id', showEditReviewForm);

// HANDLE UPDATE review (with validation)
router.post('/api/update/:id', reviewValidationRules, validate, updateReview);

// DELETE review
router.post('/api/delete/:id', deleteReview);

module.exports = router;
