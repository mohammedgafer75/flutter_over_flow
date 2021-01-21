const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MissionSchema = new Schema({
    missionId: {type: Schema.Types.ObjectId,ref:'notification'},
    title: {type: String, required: true},
    description: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    location_id: {type: String, required: true},
    points: {type: Number,require: true},
    image: { data: Buffer, contentType: String },
    Time: {type: Date, default: Date.now },
    Mumbers: {type: Number,require:true},
    CategoryId: {type: String,ref:'category'},
    Status: {type: String, require:true},

})
module.exports = mongoose.model('mission', MissionSchema);
