const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temp_notify = new Schema({
 id :{ type: Schema.Types.ObjectId, require:true },
 mission_id: {type: Number, require:true},
 status: { type:String, require:true },
 user_id: { type:Number, require:true},

})

module.exports = mongoose.model('temp_notify', temp_notify);