const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const read_unread = new Schema({
 read_unread_id :{ type: Schema.Types.ObjectId, require:true },
 basic_id: {type: Number, require:true,default:0},
 second_id: {type: Number, require:true, default:0},
 notify_txt: { type:String, require:true},
 read: {type: Number, require: true, default:0}

})

module.exports = mongoose.model('read_unread',read_unread);