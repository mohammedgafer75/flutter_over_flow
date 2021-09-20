const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Saved_post = new Schema({
 post_id :{ type: String, require:true },
 user_id :{ type: String, require:true },
})

module.exports = mongoose.model('saved_post', Saved_post);
