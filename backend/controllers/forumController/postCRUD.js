var mongoose = require('mongoose');
var commentModel = require('../../models/comment').comment;
var postModel = require('../../models/post').post;
var postcategoryModel = require('../../models/post_category').post_category;
var { uploadFile, deleteFile  } = require('../s3')

const bucketName = "cryptoconnect/postUploads"
// add post on a forum page
exports.addPost = function (req, res) {
    const file = req.file
    postModel.create({
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        post_category_id: mongoose.Types.ObjectId(req.body.post_category_id),
        title: req.body.title,
        content: req.body.content,
        images: 'postUploads/' + 
        req.file.filename + 
        '.' + 
        req.file.mimetype.split('/')[1],


    }, async function (err, result) {

        if (err) {
            console.log(err)
            res.send(err)
        }
        const s3Res = await uploadFile(file, bucketName);
        console.log(s3Res)
        res.send(result)
    })

}

// update post
exports.updatePost = function (req, res) {
    postModel.findByIdAndUpdate({
        _id : req.body._id
    }, {
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        post_category_id: mongoose.Types.ObjectId(req.body.post_category_id),
        title: req.body.title,
        content: req.body.content,
        images: req.body.images
    }, function (err, result) {

        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send(result)
    })
}

// delete post
exports.deletePost = function (req, res) {
    postModel.findOneAndDelete({
        _id : mongoose.Types.ObjectId(req.params)
    }, function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send(result)
    })
}

// fetch post detail
exports.fetchPostDetail = async (req, res) => {
    postModel.findById(req.params.id, function (error, result) {
        if (error) {
            return res.send(error)
        } else {
            res.send(result)
        }
    })
}

// fetch comment for post detail
exports.fetchCommentForPost = async (req, res) => {
    commentModel.find({ post_id: req.params.post_id }, function (error, data) {
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    }).sort({'createdAt': 'desc'})
}

// fetch all categories
exports.fetchAllCategories = (req, res) => {
    postcategoryModel.find({}, function (error, data) {
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    })

}

// fetch post for chosen category
exports.fetchPostsForTopic =  (req, res) =>  {
    // console.log(req.params.post_category_id)
    postModel.aggregate([
        {$match:{post_category_id:  mongoose.Types.ObjectId(req.params.post_category_id)}},
        {$lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "users"
        }},
        {$project :{
            title: 1,
            content: 1,
            createdAt: 1,
            updatedAt: 1,
            user_id: 1,
            votes: 1,
            post_category_id: 1,
            images: 1,
            "users._id" :1 ,
            "users.username" :1,
            "users.name" : 1
        }},
        {$sort: {createdAt: -1}}
        
    ]).exec((error, data) =>{
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    })
}

// like function for post
exports.likePost = (req, res) => {
    postModel.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(req.body._id) }, {

        $push: { votes: req.params.id }

    }, function (err, result) {

        if (err) {

            return res.send(err)

        }
        return res.send(result)

    })
}

exports.dislikePost = (req, res) => {
    postModel.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(req.body._id) }, {

        $pull: { votes: req.params.id }

    }, function (err, result) {

        if (err) {

            return res.send(err)

        }
        return res.send(result)

    })
}