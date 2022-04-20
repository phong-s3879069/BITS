const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    breaking: String,
    image: String,
    news_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "news_categories",
    },
    date: {
        type: mongoose.Schema.Types.Date,
        default: new Date(),
        ref: "date"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }

}, {timestamps: true});
exports.news = mongoose.model('News', NewsSchema)