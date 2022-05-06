// const { fetchPostsForTopic, fetchAllCategories } = require('../../controllers/forumController/fetchPost');
const { fetchPostsForTopic, fetchAllCategories, addPost, updatePost, deletePost, fetchPostDetail, fetchCommentForPost, likePost, dislikePost } = require('../../controllers/forumController/postCRUD');

var router = require('express').Router();

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './../cryptoconnect/public/postUploads')
    }

})

var upload = multer({
    storage
});

router.get('/getPost/:post_category_id', fetchPostsForTopic)
router.put('/posts/like/:id', likePost)
router.put('/posts/dislike/:id', dislikePost)
router.get('/getPostCategory', fetchAllCategories)
router.post('/posts/add',upload.single('images'), addPost)
router.put('/posts/update',upload.single('images'), updatePost)
router.delete('/posts/delete/:id', deletePost)
router.get('/getPostDetail/:id', fetchPostDetail)
router.get('/getPostDetail/getComment/:post_id', fetchCommentForPost)

module.exports = router

