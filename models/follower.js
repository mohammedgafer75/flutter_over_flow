const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const follower = new Schema({
 followers_Id :{ type: Schema.Types.ObjectId, require:true },
 userid: {type: Number, require:true},
 follower_id: {type: Number , require:true},

})

module.exports = mongoose.model('follower', follower);