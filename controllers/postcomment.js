const co = require('../models/postcomment');
const ne = require('../models/postcomment');


exports.getAllComment = async (req, res, next) =>{
 const Comment = await ne.find({});
    res.status(200).json(Comment);
 };

exports.postComment = async (req, res, next) =>{
   const {user_id,post_id,comment,code} = req.body;
   const newComment = new co({user_id,post_id,comment,code});
  
   try {
       const Comment = await newComment.save();
       res.status(201).json({check:1,massage:'Comment added',id:Comment._id});
   } catch (error) {
       error.status = 400;
       res.json({check:0, massage:'Comment does not add'})
   }
};

exports.getComById = async (req, res, next) =>{
    const { postId } = req.params;
    const Comments = await co.find({postId});
    res.status(200).json(Comments);
 };

 exports.updateComment = async (req, res, next) =>{
   const { commentId } = req.params;
   try {
       await co.findByIdAndUpdate(commentId, req.body);
       res.status(200).json({check:1, massage:'success'})
   } catch (error) {
       error.status = 200;
       res.json({check:0, massage:error})
   }
};
exports.deleteComment = async (req, res, next) =>{
   const { commentId } = req.params;
   try {
       await co.findByIdAndRemove(commentId);
       res.status(200).json({check:1, massage:'success'});
   } catch (error) {
       error.status = 400;
       res.json({check:0, massage:'can not delete'})
   }
};
