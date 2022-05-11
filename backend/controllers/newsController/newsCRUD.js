var mongoose = require('mongoose')
var newsModel = require('../../models/news').news;
var newscategoryModel = require('../../models/news_category').news_category;
var { uploadFile, deleteFile } = require('../s3')

const bucketName = "cryptoconnect/newsUploads"

exports.addNews = function (req, res) {
    const file = req.file
    newsModel.create({
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        news_category_id: mongoose.Types.ObjectId(req.body.news_category_id),
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        images: 'newsUploads/' + 
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

exports.updateNews = function (req, res) {
    newsModel.findByIdAndUpdate({
        _id : req.body._id
    }, {
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        news_category_id: mongoose.Types.ObjectId(req.body.news_category_id),
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

exports.deleteNews = function (req, res) {
    newsModel.findOneAndDelete({
        _id : mongoose.Types.ObjectId(req.params)
    }, function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send(result)
    })
}

exports.fetchNewsDetailIncludingCategory = async (req, res) => {
    newsModel.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
        {
            $lookup: {
                from: "news_categories",
                localField: "news_category_id",
                foreignField: "_id",
                as: "news_categories"
            }
        },
        {
            $project: {
                user_id: 1,
                news_category_id: 1,
                title: 1,
                author: 1,
                content: 1,
                images: 1,
                createdAt: 1,
                updatedAt: 1,
                "news_categories._id": 1,
                "news_categories.name": 1,
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

exports.fetchAllNewsCategories = (req, res) => {
    newscategoryModel.find({}, function (error, data) {
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    })
}

exports.fetchNewsForTopic =  (req, res) =>  {
    newsModel.aggregate([
        {$match:{news_category_id:  mongoose.Types.ObjectId(req.params.news_category_id)}},
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
            news_category_id: 1,
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

exports.fetchAllNews = (req, res) => {
    newsModel.find({}, function (error, data) {
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    })

}
