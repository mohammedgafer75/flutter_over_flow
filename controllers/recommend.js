const reco = require('../models/recommended');

exports.getAllRecommend= async (req, res, next) =>{
    const Recommended  = await reco.find({});
    res.status(200).json(Recommended);
 };

exports.postRecommend  = async (req, res, next) =>{
    const { title,description,link} = req.body;
    const newMission = new reco({ title,description,link});

    try {
        const Recommended = await newMission.save();
        res.status(201).json({check:1,massage:'Recommended added',id:Recommended._id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'Recommended does not add'})
    }
 };
