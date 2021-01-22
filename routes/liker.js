const express = require('express');
const router  = express.Router();

const liker_Co =  require('./../controllers/liker');

router.route('/')
.post(liker_Co.postliker)
.get(liker_Co.getliker);
router.route('/:mission_liked_id')
.get(liker_Co.getlikerbyid);
router.route('/:mission_liked_id')
.delete(liker_Co.deletelike);



module.exports = router;