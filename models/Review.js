const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    reviewText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    lastUpdated: { type: Date, default: Date.now }
});

// update lastUPdated filed when savinfg
reviewSchema.pre('save', function (next) {
    this.lastUpdated = new Date();
    next();
});

// brfore updating using these mtethofds update lastUpdated
reviewSchema.pre(['updateOne', 'findOneAndUpdate', 'updateMany'], function (next) {
    this.set({ lastUpdated: new Date() });
    next();
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;