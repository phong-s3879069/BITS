var mongoose = require('mongoose')
var Lessons_categorySchema = new mongoose.Schema({
    name: String
 })
 exports.news_category = mongoose.model('Lessons_category', News_categorySchema)