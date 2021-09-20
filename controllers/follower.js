const follower = require('./../models/follower');

exports.postfollower = async (req, res, next) =>{
    const { user_id,follower_id} = req.body;
    const newfollower = new follower({user_id,follower_id});
    try {
        const Follower = await newfollower.save();
        res.status(201).json({check:1,massage:'follower added'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'follower does not add'})
    }
 };

exports.getfollower = async (req, res, next) =>{
    const Follower = await follower.find({});
    res.status(200).json(Follower);
    }

    exports.getfollowerbyid = async (req, res, next) => {
        const { user_id } = req.params;
        
        try {
            const Follower = await follower.find({user_id});
            const count = Follower.length;
            if(count == 0){
                res.status(200).json({check:0});
            }else{
                res.status(200).json({check:1,Follower: Follower});
            }
            
        } catch (error) {
            error.status = 400;
            res.json({check:0, massage:'error'})
        }
    }
    exports.getfollowerbyid2 = async (req, res, next) => {
        const { follower_id } = req.params;
        
        try {
            const Follower = await follower.find({follower_id});
            const count = Follower.length;
            if(count == 0){
                res.status(200).json({check:0});
            }else{
                res.status(200).json({check:1,Follower: Follower});
            }
            
        } catch (error) {
            error.status = 400;
            res.json({check:0, massage:'error'})
        }
    }
    exports.deletefollower = async (req, res, next) => {
        const { follower_id } = req.params;
        try {
            const Follower = await follower.findOneAndRemove({follower_id});
            res.status(200).json({m:"Deleted",Follower:Follower});
        } catch (error) {
            error.status = 400;
            res.json({check:0, massage:'error'})
        }
    }