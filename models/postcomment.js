const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostComment = new Schema({
 comment_id :{ type: Schema.Types.ObjectId, require:true },
 post_id :{ type: String, require:true },
 user_id :{ type: String, require:true },
 comment: {type: String, require:true},
 code: {type: String},
 Time: {type: Date, default: Date.now },
 
})

module.exports = mongoose.model('postcomment', PostComment);
