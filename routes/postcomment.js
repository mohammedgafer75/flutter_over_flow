const express = require('express');
const router  = express.Router();

const post_Co =  require('../controllers/postcomment');

router.route('/')
.get(post_Co.getAllComment)
.post(post_Co.postComment);

router.route('/:commentId')
.get(post_Co.getComById)
.put(post_Co.updateComment)
.delete(post_Co.deleteComment);

module.exports = router;
