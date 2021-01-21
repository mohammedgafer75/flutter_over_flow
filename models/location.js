const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const location = new Schema({
 location_id :{ type: Schema.Types.ObjectId, require:true },
 location_name: {type: String, require:true},
})

module.exports = mongoose.model('location', location);