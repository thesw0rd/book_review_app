const getHomePage = (req, res) => {
    res.render('index', { title: 'Book Review App' });
};

const getReviewsPage = (req, res) => {
    res.render('reviews', { title: 'Book Reviews' });
};

module.exports = { getHomePage, getReviewsPage };
