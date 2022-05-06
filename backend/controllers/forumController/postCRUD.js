// this file is the backend for the create, read, update, delete Post
var mongoose = require('mongoose');
var postModel = require('../../models/post').post;
var commentModel = require('../../models/comment').comment;

exports.addPost = function (req, res) {
    console.log(req.body.user_id)
    postModel.create({
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        category_id: mongoose.Types.ObjectId(req.body.category_id),
        title: req.body.title,
        content: req.body.content,
        images: req.body.images,
        
    }, function (err, result) {

        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send(result)
    })

}

exports.updatePost = function (req, res) {
    postModel.findByIdAndUpdate({
        _id : req.body._id
    }, {
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        category_id: mongoose.Types.ObjectId(req.body.category_id),
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

exports.fetchPostDetail = async (req, res) => {
    postModel.findById(req.params.id, function (error, result) {
        if (error) {
            return res.send(error)
        } else {
            res.send(result)
        }
    })
}

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


