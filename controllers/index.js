const getHomePage = (req, res) => {
    res.render('index', { title: 'Book Review App' });
};

module.exports = { getHomePage };
