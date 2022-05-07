var postModel = require('../../models/post').post

var mongoose = require('mongoose');

exports.fetchOwnedPosts = async (req, res) => {

    postModel.find({
        user_id:  mongoose.Types.ObjectId(req.params.user_id)
    }, function (error, data) {
        if (error) {
            console.log(error)
            return res.send(error)
            
        } else {
            return res.send(data)
        }
    })
}
