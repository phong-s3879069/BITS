const router = require('express').Router();

let News = require('../models/news');

router.route('/add').post((req, res) => {
    // title: String,
    //     content: String,
    //     breaking: String,
    //     image: String,
    const newsTitle = req.body.title;
    const newsContent = req.body.content;
    const newsBreaking =  req.body.breaking;
    const newsImage = req.body.image

    // const newsCategory =

    const newNews = new News({newsTitle, newsContent, newsBreaking, newsImage})

    newNews.save()
        .then(() => res.json('News posted'))
        .catch( err => res.status(400).json('Error: ' + err));
})

module.exports = router