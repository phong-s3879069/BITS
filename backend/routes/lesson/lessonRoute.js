var router = require('express').Router();


var multer = require('multer');
const { fetchLessonsForTopic, 
    fetchAllLessonCategories, 
    addLesson, 
    updateLesson, 
    deleteLesson, 
    fetchLessonDetailIncludingCategory } = require('../../controllers/lessonsController/lessonsCRUD');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './../cryptoconnect/public/lessonUploads')
    }

})

var upload = multer({
    storage
});

router.get('/getLesson/:lesson_category_id', fetchLessonsForTopic)
router.get('/getLessonCategory', fetchAllLessonCategories)
router.post('/lesson/add',upload.single('images'), addLesson)
router.put('/lesson/update',upload.single('images'), updateLesson)
router.delete('/lesson/delete/:id', deleteLesson)
router.get('/getLessonDetailIncludingCategory/:id', fetchLessonDetailIncludingCategory)

module.exports = router