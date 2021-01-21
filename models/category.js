const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
 categoryId : {type: String },
 title: {type: String, require:true},
 description: {type: String , require:true},
 name_En: {type: String}

})

module.exports = mongoose.model('category', category);
