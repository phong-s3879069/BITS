const mongoose = require('mongoose');
const News_categorySchema = new mongoose.Schema({
    name: String
});
exports.news_category = mongoose.model('News_category', News_categorySchema)