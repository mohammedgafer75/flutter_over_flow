const express = require('express');
const router  = express.Router();

const Ca = require('./../controllers/category');

router.route('/:categoryId').get(Ca.getAllCat);
router.route('/').get(Ca.getAll);



module.exports = router;