const app = require('../models/apps');

exports.getAllApp = async (req, res, next) =>{
    const App  = await app.find({});
    res.status(200).json(App);
 };

exports.postApp  = async (req, res, next) =>{
    const { name,description,image,m_name,link} = req.body;
    const newMission = new app({ name,description,image,m_name,link});
    try {
        const App = await newMission.save();
        res.status(201).json({check:1,massage:'App added',id:App._id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'App does not add'})
    }
 };
