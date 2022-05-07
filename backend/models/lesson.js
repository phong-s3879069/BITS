var mongoose = require('mongoose')
var LessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    lessons_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"lesson_categories",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
 
 },{timestamps: true})
 exports.lessons = mongoose.model('Lesson', LessonSchema)