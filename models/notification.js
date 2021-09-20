const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notification = new Schema({
 notification_id :{ type: Schema.Types.ObjectId, require:true },
 notification_: {type: String, require:true},
 mission_id: {type: String, require:true, ref:'mission'},
})

module.exports = mongoose.model('notification', notification);
