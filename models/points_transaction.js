const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const points_tran = new Schema({
 point_tran_id :{ type: Schema.Types.ObjectId, require:true },
 sender_userid: {type: Number, require:true},
 reciever_userid: {type: Number, require:true},
 points: { type:Number, require:true},
 transaction_time: {type: Date, default: Date.now}

})

module.exports = mongoose.model('points_tran', points_tran);