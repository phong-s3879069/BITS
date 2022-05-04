const { fetchPostsForTopic, fetchAllCategories } = require('../../controllers/forumController/fetchPost');
const { addPost, updatePost, deletePost, fetchPostDetail, fetchCommentForPost } = require('../../controllers/forumController/postCRUD');

var router = require('express').Router();


router.get('/getPost/:category_id', fetchPostsForTopic)
router.get('/getCategory', fetchAllCategories)
router.post('/posts/add', addPost)
router.put('/posts/update', updatePost)
router.delete('/posts/delete/:id', deletePost)
router.get('/getPostDetail/:id', fetchPostDetail)
router.get('/getPostDetail/getComment/:post_id', fetchCommentForPost)
module.exports = router

