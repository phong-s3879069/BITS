require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const AWS = require('aws-sdk')
const fs = require('fs')

const {
    AWS_BUCKET_REGION,
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY } = process.env;

AWS.config.update({
    region: AWS_BUCKET_REGION,
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
})

const s3 = new S3({
    AWS_BUCKET_REGION,
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY
})

//Upload file
exports.uploadFile = (file, bucket) => {
    const fileStream = fs.createReadStream(file.path)

    const type = file.mimetype.split('/')

    const uploadParams = {
        Bucket: bucket,
        Body: fileStream,
        Key: file.filename + "." + type[1]
    }

    return s3.upload(uploadParams).promise();
}

//Delete file
exports.deleteFile = (fileKey, bucket) => {

    const newFileKey = fileKey.split('/')

    const deleteParams = {
        Bucket: bucket,
        Key: newFileKey[1]
    }

    s3.deleteObject(deleteParams, function (err, data) {
        if (err) {
            console.log(err, err.stack)
        } 
        else { console.log("Success");}                
    });
};

//Download file
// exports.getFileStream = (fileKey, bucket) => {

//     const newFileKey = fileKey.split('/')

//     const downloadParams = {
//         Bucket: bucket,
//         Key: newFileKey[1]
//     }

//     return s3.getObject(downloadParams).createReadStream();
// }