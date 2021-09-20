const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Saved_reco = new Schema({
 reco_id :{ type: String, require:true },
 user_id :{ type: String, require:true },
})

module.exports = mongoose.model('saved_reco', Saved_reco);
