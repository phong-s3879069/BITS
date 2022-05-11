var mongoose = require('mongoose')
var NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    images: String,
    author: String,
    news_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"news_categories",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
 
 },{timestamps: true})
 exports.news = mongoose.model('News', NewsSchema)