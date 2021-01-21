const image_mod = require('./../models/image');

exports.getImage =  async(req, res, next ) => {
   const Image = await image_mod.find({});
   res.status(200).json(Image);
};