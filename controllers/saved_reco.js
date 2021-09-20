const app = require('../models/saved_reco');

exports.getAllSavedReco = async (req, res, next) =>{
    const Saved  = await app.find({});
    res.status(200).json(Saved);
 };

exports.postSavedReco  = async (req, res, next) =>{
    const { reco_id,user_id} = req.body;
    const newMission = new app({reco_id,user_id});
   
    try {
        const Saved = await newMission.save();
        res.status(201).json({check:1,massage:'Saved added',id:Saved.user_id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'Saved does not add'})
    }
 };
 exports.getUseRecoPost  = async (req, res, next) =>{
    const {user_id} = req.params;
     try {
        const Saved = await app.find({user_id});
        res.status(200).json(Saved);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
 exports.deleteSave  = async (req, res, next) =>{
    const {reco_id} = req.params;
     try {
         const D = await app.deleteOne({reco_id})
       // const Post = await app.findByIdAndRemove(id);
        res.status(200).json(D);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
