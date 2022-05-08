var mongoose = require('mongoose')
var Lesson_categorySchema = new mongoose.Schema({
    name: String
 })
 exports.lesson_category = mongoose.model('Lesson_category', Lesson_categorySchema)