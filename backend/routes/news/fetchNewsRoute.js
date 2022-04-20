

const router = require('express').Router();

let News = require('../models/news');

router.route('/').get((req, res) => {
    News.find()
        .then(newses => res.json(newses))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router