const express = require('express');
const router  = express.Router();

const image_Co =  require('./../controllers/image');
router.route('/').post(image_Co.getImage);

module.exports = router;