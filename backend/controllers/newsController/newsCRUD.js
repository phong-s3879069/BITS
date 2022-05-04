//
// import { uploadImage, deleteImage} from "./newsImageControl";
//
// const bucketName = "covi-away-app/newsUploads"
//
// let News = require('../models/news');
//
// export const getNewses = async (req, res) => {
//     await News.find({}, (err, result) => {
//         res.send(result)
//     })
// }
//
// export const getNewsDetail = async (req, res) => {
//     News.findById = function (id, param2) {
//
//     }
//     await News.findById(req.params.id, (err, result) => {
//         res.send(result)
//     })
// }
//
// export const addNews = (req, res) => {
//     // const file = req.file;
//     News.create({
//         title: req.body.title,
//         content: req.body.content,
//         breaking: req.body.breaking,
//         // image: 'newsUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
//         news_category_id:  req.body.news_category_id,
//         date: req.body.date,
//         user_id: req.body.user_id
//     },
//     async function (err, result) {
//         if (err) {
//             console.log("Error: " + err)
//         } if (result) {
//             // const result = await uploadImage(file, bucketName);
//             res.send(result)
//         }
//     }
//     )
// }
//
// export const deleteNews = async (req, res) => {
//     await News.findOneAndDelete({ _id: req.body._id }, (err, result) => {
//         res.send(result)
//         deleteImage(result.image, bucketName)
//     })
// }
//
// export const updateNews =  (req, res) => {
//     if (req.file) {
//         News.findOne({_id: req.body._id}, (err, result) => {
//             if (result) {
//                 deleteImage(result.image, bucketName);
//                 News.findOneAndUpdate({_id: req.body._id}, {
//                     title: req.body.title,
//                     content: req.body.content,
//                     breaking: req.body.breaking,
//                     image: 'newsUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
//                     news_category_id: req.body.news_category_id,
//                     date: req.body.date,
//                 }, async (err, result) =>{
//                     if (err){
//                         console.log("Error: " + err)
//                     }
//                     if (result) {
//                         const newS3 = await uploadImage(req.file, bucketName)
//                         res.send(result);
//                     }
//                 })
//             }
//             else {
//                 News.findOneAndUpdate({_id: req.body._id}, {
//                     title: req.body.title,
//                     content: req.body.content,
//                     breaking: req.body.breaking,
//                     news_category_id: req.body.news_category_id,
//                     date: req.body.date,
//                 }, async (err, result) =>{
//                     if (err) {
//                         console.log("Error: " + err)
//                     }
//                     if (result) {
//                         res.send(result)
//                     }
//                 })
//             }
//         })
//     }
// }