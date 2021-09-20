var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const image_missionSchema = new Schema({
    mission_id: {type:String},
    image: {type:String}


});
  module.exports = mongoose.model('mission_image', image_missionSchema);