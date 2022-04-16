var mongoose = require('mongoose')
var LessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    breaking: String,
    image: String,
    lessons_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"news_lessons",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
 
 },{timestamps: true})
 exports.news = mongoose.model('Lesson', NewsSchema)