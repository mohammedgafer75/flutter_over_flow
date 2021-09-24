const express = require('express');
const router  = express.Router();

const app_Co =  require('../controllers/feedback');

router.route('/')
.get(app_Co.getAllApp)
.post(app_Co.postApp);

module.exports = router;
