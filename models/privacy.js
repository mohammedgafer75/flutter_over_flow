const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privacy = new Schema({
 privacy_id :{ type: Schema.Types.ObjectId, require:true },
 header: {type: String, require:true},
 text: {type: String, require:true},

})

module.exports = mongoose.model('privacy', privacy);