const express = require('express');
const router  = express.Router();

const app_Co =  require('../controllers/saved_post');

router.route('/')
.get(app_Co.getAllSavedPost)
.post(app_Co.postSavedPost);
router.route('/:user_id')
.get(app_Co.getUserSavedPost);
router.route('/delete/:post_id')
.delete(app_Co.deleteSave);

module.exports = router;
