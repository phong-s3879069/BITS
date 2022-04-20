

const router = require('express').Router();

import { getNewses, addNews} from "../../controllers/newsController/newsCRUD";

router.get('/', getNewses);
router.post('/add', addNews)
module.exports = router