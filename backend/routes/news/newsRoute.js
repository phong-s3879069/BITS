var router = require('express').Router();
var multer = require('multer');
const { fetchNewsForTopic, fetchAllNewsCategories, addNews, updateNews, deleteNews, fetchNewsDetailIncludingCategory } = require('../../controllers/newsController/newsCRUD');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './../cryptoconnect/public/newsUploads')
    }

})

var upload = multer({
    storage
});

router.get('/getNews/:news_category_id', fetchNewsForTopic)
router.get('/getNewsCategory', fetchAllNewsCategories)
router.post('/news/add',upload.single('images'), addNews)
router.put('/news/update',upload.single('images'), updateNews)
router.delete('/news/delete/:id', deleteNews)
router.get('/getNewsDetailIncludingCategory/:id', fetchNewsDetailIncludingCategory)

module.exports = router