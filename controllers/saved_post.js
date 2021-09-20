const app = require('../models/saved_post');

exports.getAllSavedPost = async (req, res, next) =>{
    const Saved  = await app.find({});
    res.status(200).json(Saved);
 };

exports.postSavedPost  = async (req, res, next) =>{
    const {user_id, post_id} = req.body;
    const newMission = new app({user_id,post_id});
   
    try {
        const Saved = await newMission.save();
        res.status(201).json({check:1,massage:'Saved added',id:Saved.user_id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'Saved does not add'})
    }
 };
 exports.getUserSavedPost  = async (req, res, next) =>{
    const { user_id} = req.params;
     try {
        const Post = await app.find({user_id});
        res.status(200).json(Post);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
 exports.deleteSave  = async (req, res, next) =>{
    const {post_id} = req.params;
     try {
        const Post = await app.deleteOne({post_id});
        res.status(200).json(Post);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
 
