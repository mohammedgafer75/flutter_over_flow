const express = require('express');
const router  = express.Router();

const error_Co =  require('../controllers/error');

router.route('/')
.get(error_Co.getAllError)
.post(error_Co.postError);

router.route('/:type')
.get(error_Co.getErrorByType);

module.exports = router;
