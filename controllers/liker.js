const liker = require('../models/liker');

exports.postliker = async (req, res, next) =>{
    const { user_id,post_liked_id} = req.body;
    const newLiker = new liker({user_id,post_liked_id});
    try {
        const Liker = await newLiker.save();
        res.status(201).json({check:1,massage:'liker added'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'liker does not add'})
    }
 };
 exports.getliker = async (req, res, next) =>{
 const Liker = await liker.find({});
 res.status(200).json(Liker);
 

 }
 exports.getlikerbyid = async (req, res, next) => {
    const { user_id } = req.params;
    
    try {
        const Liker = await liker.find({user_id});
        const count = Liker.length;
        console.log(count);
        if(count == 0){
            res.status(200).json({check:0});
        }else{
            res.status(200).json({check:1,Liker: Liker});
        }
        
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
}

exports.deletelike = async (req, res, next) => {
    const { post_liked_id } = req.params;
    try {
        const Liker = await liker.findOneAndRemove({post_liked_id});
        res.status(200).json("Deleted");
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
}