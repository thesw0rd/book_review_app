const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const view = req.originalUrl.includes('edit') ? 'updateReview' : 'createReview';
    return res.status(400).render(view, {
      title: view === 'updateReview' ? 'Edit Review' : 'Add New Review',
      errors: errors.array(),
      review: req.body,
    });
  }
  next();
};