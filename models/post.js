const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    mPostId: {type: Schema.Types.ObjectId},
    user_name: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    user_id: {type: String, ref: 'user'},
    image: { data: Buffer, contentType: String },
    Time: {type: Date, default: Date.now },

})
module.exports = mongoose.model('post', PostSchema);
