var commentModel = require('../../models/comment').comment;
// var { uploadFile, deleteFile  } = require('../s3')

var mongoose = require('mongoose');
// const bucketName = "cryptoconnect/commentUploads"

exports.addComment = function (req, res) {

    console.log(req.body);
    // console.log(req.file);
        commentModel.create({
            
            // images: 'commentUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
            post_id: req.body.post_id,
            content: req.body.content,
            user_id: req.body.user_id

        }, function (err, result) {

            if (err) {
                console.log(err)
            }
    
            // const s3Res = await uploadFile(file, bucketName);
            // console.log(s3Res)
            res.send(result)
    
        })

}

exports.editComment = function (req, res) {

    
                console.log(req.body)
                commentModel.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(req.body._id) }, {
                    // images: 'commentUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
                    content: req.body.content,
                    
                }, function (error, result) {
                    if (error) {
                        console.log(error)
                    } else {

                        // const s3Res = await uploadFile(file, bucketName);
                        console.log(result)
                        // console.log(s3Res)
                        res.send(result)
                    }
                })

    
}

exports.deleteComment = function (req, res) {

    commentModel.findOneAndDelete({
        _id: mongoose.Types.ObjectId(req.params.id)
    }, function (err, result) {
        if (err) {
            console.log(err)
        }

        // if (result.images) {
        //     deleteFile(result.images, bucketName)
        // }
        
        // console.log(result)
        res.send("Deleted")

    })

}


