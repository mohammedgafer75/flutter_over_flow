const express = require('express');
const router  = express.Router();

const reco_Co =  require('../controllers/recommend');

router.route('/')
.get(reco_Co.getAllRecommend)
.post(reco_Co.postRecommend);

module.exports = router;