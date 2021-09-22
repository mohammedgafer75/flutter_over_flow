const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String},
    image:{type: String},
    Time: {type: Date, default: Date.now },
})
module.exports = mongoose.model('recommend', RecommendSchema);
