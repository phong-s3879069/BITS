var NewsCategory = require('../../models/lesson_category').lesson_category;

exports.getLessonCategory = function(req, res) {
    LessonCategory.find({}, (err, result) => {
        res.send(result)
    })
}