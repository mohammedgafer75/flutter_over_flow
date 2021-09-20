const express = require('express');
const router  = express.Router();

const follower_Co =  require('./../controllers/follower');

router.route('/')
.post(follower_Co.postfollower)
.get(follower_Co.getfollower);
router.route('/:user_id')
.get(follower_Co.getfollowerbyid);
router.route('follow/:follower_id')
.get(follower_Co.getfollowerbyid2);
router.route('followers/:follower_id')
.delete(follower_Co.deletefollower);



module.exports = router;