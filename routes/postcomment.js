const express = require('express');
const router  = express.Router();

const post_Co =  require('../controllers/postcomment');

router.route('/')
.get(post_Co.getComBy)
.post(post_Co.postComment);

router.route('/a')
.get(post_Co.getComBy);

router.route('/:commentId')
.get(post_Co.getComById)
.put(post_Co.updateComment)
.delete(post_Co.deleteComment);

module.exports = router;
