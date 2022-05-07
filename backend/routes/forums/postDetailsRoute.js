var router = require('express').Router();

var {addComment, editComment, deleteComment} = require('../../controllers/forumController/commentCRUD');

// var multer = require('multer');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './../cryptoconnect/public/commentUploads')
//     }

// })

// var upload = multer({
//     storage
// });

router.post('/comment', addComment);
router.put('/comment/update', editComment);
router.delete('/comment/delete/:id', deleteComment);

module.exports = router;