const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sponsers = new Schema({
 sponsers_id :[{ type: Schema.Types.ObjectId, require:true, ref:'gift' }],
 name: {type: String, require:true},
 image: { data: Buffer, contentType: String },
 description: { type:String, require:true,}

})

module.exports = mongoose.model('sponsers', sponsers);