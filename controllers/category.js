const cat = require('../models/category');
const img = require('../models/image');

exports.getAllCat = async (req, res, next) =>{
    const { categoryId } = req.params;
    const Cat = await cat.find({categoryId});
    res.status(200).json({Cat});
 };
 exports.getAll = async (req, res, next) =>{
    const Cat = await cat.find({});
    res.status(200).json(Cat);
 };
 