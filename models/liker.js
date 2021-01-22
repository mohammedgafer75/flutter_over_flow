const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likers = new Schema({
 likers_id : { type: Schema.Types.ObjectId, require:true },
 user_id: {type: String, require:true},
 mission_liked_id: {type: String, require:true},
})


module.exports = mongoose.model('liker', likers);