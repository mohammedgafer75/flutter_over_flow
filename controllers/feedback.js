const app = require('../models/feedback');

exports.getAllApp = async (req, res, next) =>{
    const App  = await app.find({});
    res.status(200).json(App);
 };

exports.postApp  = async (req, res, next) =>{
    const { text} = req.body;
    const newMission = new app({text});
    try {
        const App = await newMission.save();
        res.status(201).json({check:1,massage:'feed back added',id:App._id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'App does not add'})
    }
 };
