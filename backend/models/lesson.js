var mongoose = require('mongoose')
var LessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    images: String,
    author: String,
    lesson_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"lesson_categories",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
 
 },{timestamps: true})
 exports.lesson = mongoose.model('Lesson', LessonSchema)