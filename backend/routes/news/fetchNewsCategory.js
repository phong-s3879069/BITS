const router = require('express').Router();

let Category = require('../models/news_category');

router.route('/').get((req, res) => {
    Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router
