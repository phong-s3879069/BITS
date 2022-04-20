
let News = require('../models/news');
export const getNewses = async (req, res) => {
    await News.find()
        .then(newses => res.json(newses))
        .catch(err => res.status(400).json('Error: ' + err));
}

export const addNews = (req, res) => {
    // title: String,
    //     content: String,
    //     breaking: String,
    //     image: String,
    //     news_category_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //         ref: "news_categories",
    // },
    // date: {
    //     type: mongoose.Schema.Types.Date,
    // default: new Date(),
    //         ref: "date"
    // },
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //         ref: "users"
    // }
    News.create({
        title: req.body.title,
        content: req.body.content,
        breaking: req.body.breaking,
        image: 'newsUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
        news_category_id:  req.body.news_category_id,
        date: req.body.date,
    })
}