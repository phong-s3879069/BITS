var mongoose = require('mongoose')
var Lessons_categorySchema = new mongoose.Schema({
    name: String
 })
 exports.lessons_category = mongoose.model('Lessons_category', Lessons_categorySchema)