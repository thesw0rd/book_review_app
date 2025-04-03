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

// Handle form submission for creating a new review
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
