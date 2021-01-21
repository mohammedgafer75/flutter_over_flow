var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const imageSchema = new Schema({
    user_id: {type:String},
    image: {type:String}


});
  module.exports = mongoose.model('image', imageSchema);