const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gift = new Schema({
 gift_id :{ type: Schema.Types.ObjectId, require:true, ref:'sponser' },
 giftname: {type: String, require:true},
 sponsors_id: {type: Number, require:true},
 image: { data: Buffer, contentType: String },
 points: { type:Number,require:true},
 gift_code: {type: String, require:true},
 quantity: {type: Number , require:true},
 gift_image: {data: Buffer, contentType: String}

})

module.exports = mongoose.model('gift', gift);