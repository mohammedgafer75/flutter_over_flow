const express = require('express');
const router  = express.Router();

const post_Co =  require('../controllers/post');

router.route('/')
.get(post_Co.getAllPost)
.post(post_Co.postPost);

router.route('/:postid')
.get(post_Co.getPostById)
.put(post_Co.updatePost)
.delete(post_Co.deletePost);

router.route('/user/:user_id').get(post_Co.getuserPostById);

module.exports = router;