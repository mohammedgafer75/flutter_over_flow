const post = require('../models/post');
const { where } = require('../models/post');

exports.getAllPost = async (req, res, next) =>{
    const Post = await post.find({});
    res.status(200).json(Post);
 };

exports.postPost = async (req, res, next) =>{
    const {user_id,user_name, title,description,image} = req.body;
    const newMission = new post({user_id,user_name,title,description,image});
    
    try {
        const mission = await newMission.save();
        res.status(201).json({check:1,massage:'post added',id:mission._id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'post does not add'})
    }
 };
exports.getPostById = async (req, res, next) => {
    const { postid } = req.params;
    try {
        const Post = await post.findById(postid);
        res.status(200).json(Post);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
 exports.getuserPostById = async (req, res, next) => {
    const { user_id } = req.params;
    try {
        const Post = await post.find({user_id});
        res.status(200).json(Post);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
exports.updatePost = async (req, res, next) =>{
    const { postid } = req.params;
    try {
        await post.findByIdAndUpdate(postid, req.body);
        res.status(200).json({check:1, massage:'success'})
    } catch (error) {
        error.status = 200;
        res.json({check:0, massage:error})
    }
};
exports.deletePost = async (req, res, next) =>{
    const { postid } = req.params;
    try {
        await post.findByIdAndRemove(postid);
        res.status(200).json({check:1, massage:'success'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'can not delete'})
    }
};
