const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('./../config');

const User = require('./../models/user');
const aboutU = require('./../models/aboutU');
const { json } = require('body-parser');
const { use } = require('../routes/user');
const user = require('./../models/user');

exports.register = async (req, res, next)=>{
    const { name,email, password } = req.body;
    const username = await User.findOne({name});
    if(username)
    return res.status(403).json({massage:'Name already in use',check:4});
    const user = await User.findOne({email});
    if(user)
    return res.status(403).json({massage:'Email already in use',check:2});
    const newUser = new User({ name, email, password});
   try {
    await newUser.save();
    const token = getSignedToken(newUser);
    res.status(200).json({ massage:'hello',check:1,token,id:newUser._id});
   } catch (error) {
       error.status = 400;
       res.json({check:0})
   }
};

exports.login = async (req, res, next)=>{
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if(!user){
      return res.status(403).json({error: 'invaild user name',check:2});
      }
    // const isvaild = await user.isPasswordValid(password);
    // console.log(isvaild);
    const pas = user.password;
      if(pas != password){
      return res.status(403).json({error: 'invaild  password',check:3});
      }
    const token = getSignedToken(user);
    const id = user._id;
    const user_name = user.name;
      res.status(200).json({ token, check:1,id,user_name});

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
exports.userUpdate = async (req, res, next)=>{
  const { user_id } = req.params;
  const {about_us_id} = req.params;

    try {
       const users =  await User.findByIdAndUpdate(user_id, req.body);
        const token = getSignedToken(users);
    const newaboutU = await aboutU.findOneAndUpdate(about_us_id,{header: token, text:users.email,about_us_id:users._id});
    await users.save();
    await newaboutU.save();
        res.status(200).json({check:1, massage:'success'})
    } catch (error) {
        error.status = 200;
        res.json({check:0, massage:error})
    }

};

getSignedToken = user => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        firstName: user.name,
    },
    SECRET_KEY,{expiresIn:'1h'});
};
