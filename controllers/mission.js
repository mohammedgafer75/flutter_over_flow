const mission = require('../models/missions');
const missions = require('../models/missions');
const cat = require('../models/category');
const { where } = require('../models/missions');

exports.getAllMission = async (req, res, next) =>{
    const Mission = await mission.find({});
    res.status(200).json(Mission);
 };

exports.postMission = async (req, res, next) =>{
    const { title,description, location_id ,CategoryId} = req.body;
    const newCat = new cat({CategoryId,title,description});
    const newMission = new mission({ title,description, location_id ,CategoryId});
    newMission.user_id = req.user.id;
    newCat.categoryId = req.body.CategoryId;
    try {
        const mission = await newMission.save();
        const cat = await newCat.save();
        res.status(201).json({check:1,massage:'mission added'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'mission does not add'})
    }
 };
exports.getMissionById = async (req, res, next) => {
    const { missionid } = req.params;
    try {
        const Mission = await mission.findById(missionid);
        res.status(200).json(Mission);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
 exports.getuserMissionById = async (req, res, next) => {
    const { user_id } = req.params;
    try {
        const Mission = await mission.find({user_id});
        res.status(200).json({Mission});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
exports.updatemission = async (req, res, next) =>{
    const { missionid } = req.params;
    try {
        await missions.findByIdAndUpdate(missionid, req.body);
        res.status(200).json({check:1, massage:'success'})
    } catch (error) {
        error.status = 200;
        res.json({check:0, massage:error})
    }
};
exports.deleteMission = async (req, res, next) =>{
    const { missionid } = req.params;
    try {
        await missions.findByIdAndRemove(missionid);
        res.status(200).json({check:1, massage:'success'});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'can not delete'})
    }
};
