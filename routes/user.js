const express = require('express');
const router = express.Router();
const  usercontroller = require('./../controllers/user');

router.post('/register',usercontroller.register);
router.post('/login',usercontroller.login);
router.post('/update/:user_id',usercontroller.userUpdate);
router.get('/:user_id',usercontroller.getuserById);

module.exports = router; 