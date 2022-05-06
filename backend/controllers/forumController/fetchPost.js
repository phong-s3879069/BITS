var postsModel = require('../../models/post').post;
var categoryModel = require('../../models/category').category;

exports.fetchAllCategories = (req, res) => {
    categoryModel.find({}, function (error, data) {
        if (error) {
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    })

}

exports.fetchPostsForTopic =  (req, res) =>  {
    postsModel.aggregate([
        {$match:{category_id: req.params.category_id}},
        {$lookup: {
            from: "users", // collection name in db
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
            category_id: 1,
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
