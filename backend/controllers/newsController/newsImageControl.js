// const AWS = require('aws-sdk')
// const S3 = require('aws-sdk/clients/s3')
// const fs = require('fs')
//
// const region = "us-east-1"
// const accessKey = "AKIAW5EFHL2CRNPLJWUL"
// const secretKey = "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"
//
// AWS.config.update({
//     region: region,
//     accessKeyId: accessKey,
//     secretAccessKey: secretKey
// })
//
// const s3 = new S3({
//     region,
//     accessKey,
//     secretKey
// })
//
// export const uploadImage = (file, bucket) => {
//     // file.mimetype = undefined;
//     const fileStream = fs.createReadStream(file.path)
//     const type = file.mimetype.split('/')
//     const uploadParams = {
//         Bucket: bucket,
//         Body: fileStream,
//         Key: file.filename + "." + type[1]
//     }
//     return s3.upload(uploadParams).promise();
// }
//
// export const deleteImage = (fileKey, bucket) => {
//
//     const newFileKey = fileKey.split('/')
//
//     const deleteParams = {
//         Bucket: bucket,
//         Key: newFileKey[1]
//     }
//
//     s3.deleteObject(deleteParams, function (err, data) {
//         if (err) {
//             console.log(err, err.stack)
//         }
//         else { console.log("Success");}
//     });
// };