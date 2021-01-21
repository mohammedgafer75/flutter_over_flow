const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donation = new Schema({
 donationId :{ type: Schema.Types.ObjectId, require:true },
 donationType: {type: String, require:true},
 Accont: {type: Number , require:true},
 Phone: {type: Number, require:true}

})

module.exports = mongoose.model('donation', donation);