const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mission_op = new Schema({
 user_id :{ type: Schema.Types.ObjectId, require:true },
 like_operation: {type: Number, require:true, default:0},
 join_operation: {type: Number, require:true, default:0},
 save_operation: { type:Number, contentType: String, default:0 },
 mission_id: {type:Number,require:true},
 mission_op_id: {type: String, require:true},
 like_read: {type: Number , require:true, default:0},
 join_read: {data: Number, require:true, default:0}

})

module.exports = mongoose.model('mission_op', mission_op);