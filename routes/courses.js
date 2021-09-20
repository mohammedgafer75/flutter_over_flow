const express = require('express');
const router  = express.Router();

const course_Co =  require('../controllers/courses');

router.route('/')
.get(course_Co.getAllCourse)
.post(course_Co.postCourse);

module.exports = router;