const course = require('../models/courses');

exports.getAllCourse = async (req, res, next) =>{
    const Course  = await course.find({});
    res.status(200).json(Course);
 };

exports.postCourse  = async (req, res, next) =>{
    const { title,description,image,m_name,link} = req.body;
    const newMission = new course({ title,description,image,m_name,link});
    
    try {
        const Course = await newMission.save();
        res.status(201).json({check:1,massage:'Course added',id:Course._id});
    } catch (error) {
        error.status = 400;
        res.json({check:0, massage:'Course does not add'})
    }
 };
