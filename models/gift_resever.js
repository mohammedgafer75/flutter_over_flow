const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gift_res = new Schema({
 gift_res_id :{ type: Schema.Types.ObjectId, require:true },
 userId: {type: Number, require:true},
 giftId: {type: Number , require:true},
 time: {type: Date, default: Date.now}

})

module.exports = mongoose.model('gift_res', gift_res);