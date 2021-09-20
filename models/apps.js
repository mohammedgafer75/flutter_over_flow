const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String},
    m_name: {type: String},
    image: { type: String },
})
module.exports = mongoose.model('app', AppSchema);
