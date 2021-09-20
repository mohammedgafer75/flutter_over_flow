const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const errorSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String},
    link: {type: String},
    error_code: {type: String},
    solve_code: {type: String},
    image: {type:String}
})
module.exports = mongoose.model('error', errorSchema);
