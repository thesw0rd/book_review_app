// controllers/reviews/index.js
const Review = require('../../models/Review');

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.render('reviews', { reviews, title: 'Book Reviews' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Show form to create a new review
exports.showCreateReviewForm = (req, res) => {
  res.render('createReview', { title: 'Add New Review' });
};

// Handle form submission for CREATE a new review
exports.createReview = async (req, res) => {
try {
  console.log('Received form data:', req.body); 

  const { title, author, genre, rating, reviewText } = req.body;

  if (!title || !author || !genre || !rating || !reviewText) {
    console.error('Missing required fields');
    return res.status(400).send('Missing required fields');
  }

  const newReview = new Review({
    title,
    author,
    genre,
    rating,
    reviewText
  });

  await newReview.save();
    res.redirect('/reviews'); // Redirect to home page after creating review
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Show form to update an existing review
exports.showEditReviewForm = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).send('Review not found');
    }
    res.render('updateReview', { review, title: 'Edit Review' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Handle form submission for UPDATE an existing review
exports.updateReview = async (req, res) => {
  try {
    const { title, author, genre, rating, reviewText } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { title, author, genre, rating, reviewText, lastUpdated: Date.now() },
      { new: true } // Return the updated review
    );

    res.redirect('/reviews'); // Redirect to reviews page after updating
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Handle DELETE a review
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.redirect('/reviews');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
