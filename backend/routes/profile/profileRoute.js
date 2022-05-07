var router = require('express').Router();
var { updateAvatar, editProfile, userFollow, userUnfollow } = require('../../controllers/ProfilePage/fetchPersonalInfo');
// var { fetchOwnedPosts } = require('../../controllers/ProfilePage/fetchOwnedPosts');
var { fetchPersonalInfo } = require('../../controllers/ProfilePage/fetchPersonalInfo');
// var { fetchSavedFunction} = require('../../controllers/ProfilePage/fetchSavedFunction')

// router.get('/ownedposts/:user_id', fetchOwnedPosts);
router.get('/personalinfo/:id', fetchPersonalInfo);
router.put('/personalinfo/update', editProfile);
router.put('/personalinfo/follow/:id', userFollow)
router.put('/personalinfo/unfollow/:id', userUnfollow)
// router.get('/profile/savedfunctions/:user_id', fetchSavedFunction);
// router.get('/profile/savedtopics/:user_id', fetchSavedTopic);



var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './../cryptoconnect/public/userUploads')
    }

})

var upload = multer({
    storage
});

router.put('/ava/:id', upload.single('avatar'), updateAvatar);
module.exports = router;