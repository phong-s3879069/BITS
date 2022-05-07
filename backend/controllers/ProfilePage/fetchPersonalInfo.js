var userModel = require('../../models/user').user;
var { uploadFile, deleteFile } = require('../s3')

var mongoose = require('mongoose');
const bucketName = "cryptoconnect/userUploads"

exports.updateAvatar = function (req, res) {

    // console.log(req.body);
    console.log(req.file);

    if (req.file) {
        const file = req.file;

        userModel.findOne({ _id: mongoose.Types.ObjectId(req.params) }, function (error, result) {

            console.log("User")
            if (result) {

                if (result.avatar) {
                    //Remove current image from storage 
                    deleteFile(result.avatar, bucketName);

                } 

                //Replacing with new image
                userModel.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(req.params) }, {
                    avatar: 'userUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1]

                }, async function (error, result) {
                    if (error) {
                        console.log(error)
                    } else {

                        const s3Res = await uploadFile(file, bucketName);
                        console.log(result)
                        console.log(s3Res)
                        res.send(result)
                    }
                })

            } else {
                console.log(error)
            }
        })

    }

}

exports.fetchPersonalInfo = (req, res) => {
    userModel.findById(req.params.id, function (error, result) {
        if (error) {
            return res.send(error)
        } else {
            res.send(result)
        }
    })
}

exports.editProfile = function (req, res) {
    userModel.findByIdAndUpdate({
        _id : req.body._id
    }, {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        bio: req.body.bio
    }, function (err, result) {

        if (err) {
            console.log(err)
        }
        console.log("update")
        console.log(result)
        res.send(result)
    })
}

exports.userFollow = (req, res) => {
    userModel.findByIdAndUpdate({_id: req.body.id}, {
        $push: {followers: req.params.id}
    },{new: true}, function(err, result) {
        if(err){
          return res.send(err)
        }
        res.send(result)
    })
}

exports.userUnfollow = (req, res) => {
    userModel.findByIdAndUpdate({_id: req.body.id}, {
        $pull: {followers: req.params.id}
    },{new: true}, function(err, result) {
        if(err){
          return res.send(err)
        }
        res.send(result)
    })
}