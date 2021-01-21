const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('./../config');

const User = require('./../models/user');
const aboutU = require('./../models/aboutU');
const { json } = require('body-parser');
const { use } = require('../routes/user');

exports.register = async (req, res, next)=>{
    const { firstname,email, password } = req.body;
    const username = await User.findOne({firstname});
    if(username)
    return res.status(403).json({massage:'Name already in use',check:4});
    const user = await User.findOne({email});
    if(user)
    return res.status(403).json({massage:'Email already in use',check:2});
    const newUser = new User({ firstname, email, password});
   try {
    await newUser.save();
    const token = getSignedToken(newUser);
    const newaboutU = new aboutU({header: token, text:email,about_us_id:newUser._id});
    await newaboutU.save();
    res.status(200).json({ massage:'hello',check:1,token} );
   } catch (error) {
       error.status = 400;
       res.json({check:0})
   }
};

exports.login = async (req, res, next)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user){
      return res.status(403).json({error: 'invaild email',check:2});
      }
    const isvaild = await user.isPasswordValid(password);
      if(!isvaild){
      return res.status(403).json({error: 'invaild  password',check:3});
      }
    const token = getSignedToken(user);
    const id = user._id;
      res.status(200).json({ token, check:1,id});

};
exports.getuserById = async (req, res, next) => { 
  const { user_id } = req.params;
  try {
      const users = await User.findById(user_id);
      res.status(200).json(users);
  } catch (error) {
      error.status = 400;
      next|(error);
  }
};

getSignedToken = user => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    },
    SECRET_KEY,{expiresIn:'1h'});
};
