var commentModel = require('../../models/comment').comment;
var { uploadFile, deleteFile  } = require('../s3')

var mongoose = require('mongoose');
const bucketName = "cryptoconnect/commentUploads"

exports.addComment = function (req, res) {

    // console.log(req.body);
    // console.log(req.file);

    if (req.file) {
        const file = req.file;

        commentModel.create({
            
            images: 'commentUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
            post_id: req.body.post_id,
            content: req.body.content,
            user_id: req.body.user_id

        }, async function (err, result) {

            if (err) {
                console.log(err)
            }
    
            const s3Res = await uploadFile(file, bucketName);
            console.log(s3Res)
            res.send(result)
    
        })

    } else {

        commentModel.create({
            post_id: req.body.post_id,
            content: req.body.content,
            user_id: req.body.user_id
        }, function (err, result) {
            if (err) {
                console.log(err)
            }
    
            console.log(result)
            res.send(result)
    
        })
    }

}

exports.editComment = function (req, res) {

    // console.log("Edit comment")
    // console.log(req.file)
    if (req.file) {
        const file = req.file;

        //Get the file of current image
        commentModel.findOne({ _id: mongoose.Types.ObjectId(req.body._id)}, function(error, result) {

            console.log("Found comment")
            if (result) {
                //Remove current image from storage 
                deleteFile(result.images, bucketName);

                //Replacing with new image
                commentModel.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(req.body._id) }, {
                    images: 'commentUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
                    content: req.body.content,
                    
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

        

    } else {

        commentModel.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(req.body._id) }, {
            content: req.body.content,
            
        }, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
                res.send(result)
            }
        })

    }

    
}

exports.deleteComment = function (req, res) {

    commentModel.findOneAndDelete({
        _id: mongoose.Types.ObjectId(req.params)
    }, function (err, result) {
        if (err) {
            console.log(err)
        }

        if (result.images) {
            deleteFile(result.images, bucketName)
        }
        
        // console.log(result)
        res.send("Deleted")

    })

}


