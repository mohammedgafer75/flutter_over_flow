const error = require('../models/error');

exports.getAllError = async (req, res, next) =>{
    const Error  = await error.find({});
    res.status(200).json(Error);
 };

exports.postError  = async (req, res, next) =>{
    const {link, title,description,image,type,error_code,solve_code} = req.body;
    const newMission = new error({ title,description,image,type,link,error_code,solve_code});
    
    try {
        const Error = await newMission.save();
        res.status(201).json({check:1,massage:'Error added',id:Error._id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'Error does not add'})
    }
 };
 exports.getErrorByType = async (req, res, next) => {
    const { type } = req.params;
    try {
        const Error = await error.find({type});
        res.status(200).json(Error);
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'error'})
    }
 };
