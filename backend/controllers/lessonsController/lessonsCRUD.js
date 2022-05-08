var mongoose = require('mongoose');
var lessonModel = require('../../models/lesson').lesson;
var lessoncategoryModel = require('../../models/lesson_category').lesson_category;
var { uploadFile, deleteFile } = require('../s3')

const bucketName = "cryptoconnect/lessonUploads"

exports.addLesson = function (req, res) {
    const file = req.file
    lessonModel.create({
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        lesson_category_id: mongoose.Types.ObjectId(req.body.lesson_category_id),
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        images: 'lessonUploads/' + 
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

exports.updateLesson = function (req, res) {
    lessonModel.findByIdAndUpdate({
        _id : req.body._id
    }, {
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        lesson_category_id: mongoose.Types.ObjectId(req.body.lesson_category_id),
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

exports.deleteLesson = function (req, res) {
    lessonModel.findOneAndDelete({
        _id : mongoose.Types.ObjectId(req.params)
    }, function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send(result)
    })
}

exports.fetchLessonDetailIncludingCategory = async (req, res) => {
    lessonModel.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
        {
            $lookup: {
                from: "lesson_categories",
                localField: "lesson_category_id",
                foreignField: "_id",
                as: "lesson_categories"
            }
        },
        {
            $project: {
                user_id: 1,
                lesson_category_id: 1,
                title: 1,
                author: 1,
                content: 1,
                images: 1,
                createdAt: 1,
                updatedAt: 1,
                "lesson_categories._id": 1,
                "lesson_categories.name": 1,
            }
        },
    ]).exec((error, data) => {
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            console.log(data)
            return res.send(data)
        }
    })
}

exports.fetchAllLessonCategories = (req, res) => {
    lessoncategoryModel.find({}, function (error, data) {
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    })
}

exports.fetchLessonsForTopic =  (req, res) =>  {
    lessonModel.aggregate([
        {$match:{lesson_category_id:  mongoose.Types.ObjectId(req.params.lesson_category_id)}},
        {$lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "users"
        }},
        {$project :{
            title: 1,
            author: 1,
            content: 1,
            createdAt: 1,
            updatedAt: 1,
            user_id: 1,
            lesson_category_id: 1,
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
