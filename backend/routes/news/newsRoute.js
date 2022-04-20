const router = require('express').Router();

let News = require('../models/news');

router.route('/add').post((req, res) => {
    // title: String,
    //     content: String,
    //     breaking: String,
    //     image: String,
    // const newsTitle = req.body.title;
    // const newsContent = req.body.content;
    // const newsBreaking =  req.body.breaking;
    // const newsImage = req.body.image
    News.create({
        title: req.body.title,
        content: req.body.content,
        breaking: req.body.breaking,
        image: 'newsUploads/' + req.file.filename + '.' + req.file.mimetype.split('/')[1],
        news_category_id: req.body.news_category_id,
        user_id: req.body.user_id
    })

    News.save()
        .then(() => res.json('News posted'))
        .catch( err => res.status(400).json('Error: ' + err));
})

module.exports = router