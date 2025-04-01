const express = require('express');
const router = express.Router();

// main page
router.get('/', (req, res) => {
    res.render('index', { title: 'Book Review App' });
});

// all reviews
router.get('/reviews', (req, res) => {
    res.render('reviews', { title: 'Book Reviews' });
});

module.exports = router;
