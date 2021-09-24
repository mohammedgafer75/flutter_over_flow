const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedBack = new Schema({
    text: {type: String , require:true}
})

module.exports = mongoose.model('feedback', FeedBack);
