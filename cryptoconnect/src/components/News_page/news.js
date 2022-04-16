const router = require('express').Router();
let News = require('../News.model');
router.route('/').get((req, res) => {
    News.find()
        .then(newses => res.json(newses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const newsTitle =  req.body.title;
    const newsCategory = req.body.category;
    const newsContent = req.body.content;
    const newsDate = Date.parse(req.body.date);

    const newNews =  new News({newsTitle, newsCategory, newsContent, newsDate});

    newNews.save()
        .then(() => res.json('News added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;