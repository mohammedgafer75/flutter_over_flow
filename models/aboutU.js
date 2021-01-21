const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutU = new Schema({
    about_us_id:{type: Schema.Types.ObjectId},
    header: {type:String ,require:true},
    text: {type: String , require:true}
})

module.exports = mongoose.model('aboutU', aboutU);