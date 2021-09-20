const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    m_name: {type: String},
    link:{type:String},
    image: {type: String},
    
})
module.exports = mongoose.model('course', CourseSchema);
